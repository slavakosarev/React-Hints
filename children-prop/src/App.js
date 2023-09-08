// @ts-nocheck
import Wrapper from './components/Wrapper'
import './App.css'

function App() {
	return (
		<div className="App">
			<Wrapper color="lightblue">
				<h1>Text inside wrapper</h1>
				<button>Click me</button>
			</Wrapper>
			<Wrapper color="lightgreen">
				<h2>Another text</h2>
				<p>Some description</p>
				<input
					type="text"
					placeholder="Enter value"
				/>
			</Wrapper>
		</div>
	)
}

export default App
