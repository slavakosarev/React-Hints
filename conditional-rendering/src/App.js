// @ts-nocheck
import './App.css'
import CarInfo from './components/CarInfo'

function App() {
	return (
		<div className="App">
			<CarInfo
				car="Mersedes"
				status="God"
				isowner={true}
			/>
			<CarInfo
				car="LADA"
				status="shit"
				isowner //* можно писать без true
			/>
			<CarInfo
				car=""
				status=""
				isowner={false}
			/>
		</div>
	)
}

export default App
