import React from 'react'
import { stats } from '../constant'
import styles from '../styles'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index)=> (
      <>
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[45px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
        <p className='text-white flex justify-center items-center flex-row m-3'>|</p>        
      </>
    ))}
  </section>
)

export default Stats
