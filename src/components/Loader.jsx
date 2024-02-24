import React from 'react'
import loader from "../assets/loader.svg";
const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loader
