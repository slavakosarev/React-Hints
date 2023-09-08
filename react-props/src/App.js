// @ts-nocheck
import './App.css'
import CarInfo from './components/CarInfo'

function App() {
	return (
		<div className="App">
			<CarInfo
				car="Mersedes"
				status="God"
			/>
			<CarInfo
				car="LADA"
				status="shit"
			/>
		</div>
	)
}

export default App
