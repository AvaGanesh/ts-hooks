import CustomHookComponent from "./components/CustomHookComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";
import "./App.css"

function App() {
  return (
    <div className="App">
     
      <h1>useState</h1>
      <UseStateComponent/>

      <h1>useEffect</h1>
      <UseEffectComponent/>

      <h1>useContext</h1>
      <UseContextComponent/>

      <h1>useReducer</h1>
      <UseReducerComponent/>

      <h1>useRef</h1>
      <UseRefComponent/>

      <h1>Custom hook</h1>
      <CustomHookComponent/>
    </div>
  )
}

export default App;
 