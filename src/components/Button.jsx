import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`rounded py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:bg-gradient-to-bl from-gray-300 to-dimBlue hover:text-white transition duration-500`}>
      Get Started
    </button>
  )
}

export default Button
