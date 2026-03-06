import EmployeeCard from "./components/EmployeeCard"
import {useState} from "react"
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Employee Directory</h1>
      <p>Button clicked: {count} times</p>
      <button onClick={ () => setCount(count +1)}>
        Click me
      </button>
      <button onClick={() => setCount(count -1)}>
        Reset
      </button>
      <EmployeeCard name="Cherly" email="cherlyimfura@gmail.com"/>
      <EmployeeCard name="Orneille" email="orneille@gmail.com"/>
      
    </div>
  )
} 
export default App