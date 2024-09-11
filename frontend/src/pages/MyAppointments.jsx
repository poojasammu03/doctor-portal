import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  console.log(doctors);
  const {doctors}=useContext(AppContext)
  return (
    <div>
        <p>My Appointments</p>
        <div>
          {doctors.slice(0,2).map((item,index)=>(
            <div key={index}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyAppointments