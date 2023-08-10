import React from 'react'
import CalendlyWidget from '../../components/CalendlyWidget'
import GoogleAppointmentEmbed from '../../components/GoogleAppointmentEmbed'

const page = () => {
  return (
    <div className="flex h-screen w-full">
      <GoogleAppointmentEmbed 
        url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ240oYXdLsnSAms4XL9FgXU6oyfGRC-cjGngzJn46STva5shaCnk9mYy2vCwYzh0WOloz0iqeyd?gv=true"
      />
      {/* <CalendlyWidget/> */}
    </div>
  )
}

export default page


//add event listener custom react hook to capture details into database