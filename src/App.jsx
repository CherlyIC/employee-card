import React from 'react'
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
    <div className='min-h-screen bg-gray-100 p-8'>
      <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-2'>Employee Directory</h1>
      <p className="no-print text-center text-gray-500 mb-6">We have {filteredEmployees.length} employees</p>
      <div className="no-print flex gap-4 mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button  className="no-print bg-blue-500 text-white px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-600 transition-colors duration-300" onClick={() => window.print()}>Print</button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
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
      
      
    </div>
  )
} 
export default App