const App = ({ initialBtnText, initialBtnColor }) => {
	const [buttonText, setButtonText] = React.useState(initialBtnText)
	const [buttonColor, setButtonColor] = React.useState(initialBtnColor)

	const onButtonClick = () => {
		setButtonText('Hello from React')
		setButtonColor('green-btn')
	}
	return (
		<div className="app">
			<button
				className={buttonColor}
				onClick={onButtonClick}>
				{buttonText}
			</button>
		</div>
	)
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(
	<App
		initialBtnText="Click Me"
		initialBtnColor=""
	/>,
)
