import React from 'react'
import {useRef} from "react"
import {toPng} from "html-to-image"
function EmployeeCard({ id,name, email, phone, website, company}) {
  const cardRef = useRef(null)
  const buttonRef = useRef(null)
  const handleDownload = () => {
    buttonRef.current.style.display = "none"
    toPng(cardRef.current, { quality: 0.95 }).then(dataUrl => {
      buttonRef.current.style.display = "block"
      const link = document.createElement('a')
      link.download = `${name}.png`
      link.href = dataUrl
      link.click()
    })
  }

  return (
    <div ref={cardRef} className='bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300'>
      <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`} alt={name} 
      className="w-16 h-16 rounded-full mb-4"
      />
      <p>ID: {id}</p>
      <h2 className='text-xl font-bold text-gray-800 mt-2'>{name}</h2>
      <p className='text-sm text-gray-500 mt-2'>{email}</p>
      <p className='text-lg text-gray-700 mt-2'>{phone}</p>
      <p className='text-blue-500 underline'>{website}</p>
      <p className='text-gray-600'>{company}</p>
      <button ref={buttonRef} onClick={handleDownload} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
        Download card
      </button>
    </div>


  )
}
export default EmployeeCard