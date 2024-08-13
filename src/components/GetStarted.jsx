import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer `} >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-b from-cyan-900 to-primary`}>
      <div className={`${styles.flexStart} flex-row`}> 
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt="arrow Up" />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className='text-gradient'>Started</span>
      </p>
      
    </div>
  </div>
)


export default GetStarted
