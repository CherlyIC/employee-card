import React from 'react'
function EmployeeCard({ id,name, email, phone, website, company}) {
  return (
    <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300'>
      <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`} alt={name} 
      className="w-16 h-16 rounded-full mb-4"
      />
      <p>ID: {id}</p>
      <h2 className='text-xl font-bold text-gray-800 mt-2'>{name}</h2>
      <p className='text-sm text-gray-500 mt-2'>{email}</p>
      <p className='text-lg text-gray-700 mt-2'>{phone}</p>
      <p className='text-blue-500 underline'>{website}</p>
      <p className='text-gray-600'>{company}</p>
    </div>


  )
}
export default EmployeeCard