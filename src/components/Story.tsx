import React, { useContext, useEffect } from "react";
import { StoryProps, GlobalCtx } from "./../interfaces";
import GlobalContext from "./../context/Global";

const Story = (props: StoryProps) => {
	const globalContext = useContext<GlobalCtx>(
		GlobalContext
	);

	const { width, height, loader, header, storyStyles } = globalContext;

	const rendererMessageHandler = (type: string, data: any) => {
		switch (type) {
			case 'UPDATE_VIDEO_DURATION':
				props.getVideoDuration(data.duration);
				return { ack: 'OK' as 'OK' }
		}
	}

	useEffect(() => {
		if (props.index === props.currentId && props.playState) {
			props.action('play')
		}
	}, [props.currentId, props.playState])

	const getStoryContent = () => {
		let InnerContent = props.story.content;
		let config = { width, height, loader, header, storyStyles };
		return <InnerContent
			action={props.action}
			isPaused={props.playState}
			story={props.story}
			config={config}
			messageHandler={rendererMessageHandler}
		/>
	};

	return (
		<div
			style={{
				...styles.story,
				width: width,
				height: height,
				zIndex: 98 - props.index,
				animation: props.index < props.currentId ? '0.5s fadeOut forwards' : ''
			}}
		>
			{getStoryContent()}
		</div>
	);
};

const styles = {
	story: {
		display: "flex",
		position: "absolute",
		overflow: "hidden",
		alignItems: "center"
	},
	storyContent: {
		width: "auto",
		maxWidth: "100%",
		maxHeight: "100%",
		margin: "auto"
	}
};

export default Story;
