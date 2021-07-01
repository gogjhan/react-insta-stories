import React from 'react';
import './App.css';
import stories from './stories'
import Stories, { WithSeeMore } from '../../'

function App() {
	const loadedCount = React.useRef({ count: 0, played: false })
	const [paused, setPaused] = React.useState(true)

    const items = React.useMemo(() => {
        return <Stories
					loop
					keyboardNavigation
					isPaused={true}
					defaultInterval={6000}
					onStoryEnd={(s, st) => console.log('story ended', s, st)}
					onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
					storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
					stories={(
						stories[0].map((media, index) => ({
							content: ({ action, isPaused, active }) => {
								const onLoad = () => {
									loadedCount.current.count++
									if (loadedCount.current.count === stories[0].length && !loadedCount.current.played) {
										loadedCount.current.played = true
										action('play')
                                        setTimeout(() => setPaused(false), 0)
									}
								}
								return (
									<Slide
										media={media}
										action={action}
										isPaused={isPaused}
										index={index}
										onLoad={onLoad}
									/>
								)
							}
						}))
					)}
				/>
    }, [setPaused])

	return (
		<div className="App">
			<div className="stories">
			    {items}
				{paused && <div style={loading}/>}
			</div>
		</div>
	);
}

function Slide ({ media, action, onLoad = () => {} }) {
	return (
		<React.Fragment>
			<img alt="" src={media} style={image} onLoad={onLoad}/>
			<div style={{position: 'absolute', display: 'flex'}}>
			<button onClick={() => action('play')}>Play</button>
			<button onClick={() => action('next')}>Next</button>
			<button onClick={() => action('previous')}>Previous</button>
			</div>
		</React.Fragment>
	)
}


const image = {
	display: 'block',
	width: '100%',
	height: '100vh',
	objectFit: 'cover',
}

const loading = {
	display: 'block',
	width: '100%',
	height: '100%',
	backgroundColor: 'black',
	position: 'fixed',
	left: 0,
	top: 0,
	zIndex: 10000
}

const code = {
	background: '#eee',
	padding: '5px 10px',
	borderRadius: '4px',
	color: '#333'
}

const contentStyle = {
	background: '#333',
	width: '100%',
	padding: 20,
	color: 'white',
	height: '100%'
}

const customSeeMore = {
	textAlign: 'center',
	fontSize: 14,
	bottom: 20,
	position: 'relative'
}

export default App;
