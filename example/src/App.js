import React from 'react';
import './App.css';
import Stories, { WithSeeMore } from '../../'

function App() {
	return (
		<div className="App">
			<div className="stories">
				<Stories
					loop
					restartOnPause={true}
					keyboardNavigation
					defaultInterval={3000}
					stories={stories2}
					onStoryEnd={(s, st) => console.log('story ended', s, st)}
					onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
					onStoryStart={(s, st) => console.log('story started', s, st)}
					storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
				/>
			</div>
		</div>
	);
}

const stories2 = [
	{
		content: ({ action, isPaused, ...props }) => {
			console.log(props, 'props');
			return <div style={contentStyle}>
				<h1>The new version is here.</h1>
				<p>This is the new story.</p>
				<p>Now render React components right into your stories.</p>
				<p>Possibilities are endless, like here - here's a code block!</p>
				<pre>
					<code style={code}>
						console.log('Hello, world!')
        			</code>
				</pre>
				<p>Or here, an image!</p>
				<br />
				<img style={image} src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
				<h3>Perfect. But there's more! →</h3>
				<div style={{display: 'flex'}}>
					<button onClick={() => action('previous')}>Previous</button>
					<button onClick={() => action(isPaused ? 'play' : 'pause')}>Pause</button>
					<button onClick={() => action('next')}>Next</button>
				</div>
			</div>
		}
	},
	{
		content: ({ action, isPaused, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: 'snow', padding: 20, height: '100%' }}>
				<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
				<h1 style={{ marginTop: 5 }}>We have our good old image and video stories, just the same.</h1>
				<div style={{display: 'flex'}}>
					<button onClick={() => action('previous')}>Previous</button>
					<button onClick={() => action(isPaused ? 'play' : 'pause')}>Pause</button>
					<button onClick={() => action('next')}>Next</button>
				</div>
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}>A custom See More message →</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>,
	},
	// {
	// 	url: 'https://picsum.photos/1080/1920',
	// 	seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
	// },
]

const image = {
	display: 'block',
	maxWidth: '100%',
	borderRadius: 4,
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
