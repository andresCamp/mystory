import React from 'react'
import CalendlyWidget from '../components/CalendlyWidget'

const page = () => {
  return (
    <div className="flex h-screen w-full">
      <CalendlyWidget/>
    </div>
  )
}

export default page


//add event listener custom react hook to capture details into database