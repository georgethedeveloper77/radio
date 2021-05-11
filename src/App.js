import "./App.scss"
import Radio from "./Radio.js"
import Visualizer from "./visualizer/Visualizer"

function App() {
  return (
    <div className="App">
      <h1>Super-Duper Radio Player</h1>
      <h2>Pick a genre, choose a station, start listening</h2>
      <Radio />
      {/* <Visualizer /> */}
    </div>
  )
}

export default App