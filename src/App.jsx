import EmployeeCard from "./components/EmployeeCard"
import {useState, useEffect} from "react"
function App() {
  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState("")
  const filteredEmployees = employees.filter(employee => {
    return employee.name.toLowerCase().includes(search.toLowerCase()) || employee.email.toLowerCase().includes(search.toLowerCase())
  })
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {console.log(data); setEmployees(data)

      })
      
  }, [])
  return (
    <div>
      <h1>Employee Directory</h1>
      <p>We have {employees.length} employees</p>
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={e => {console.log(e.target.value)  
          setSearch(e.target.value)}}
      />
      <button onClick={() => window.print()}>Print all cards</button> 
      {
        filteredEmployees.map(employee => (
            <EmployeeCard 
              key={employee.id}
              id={employee.id}
              name={employee.name}
              email={employee.email}
              phone={employee.phone}
              website={employee.website}
              company={employee.company.name}  

            />
          )
        )
      }
      
    </div>
  )
} 
export default App