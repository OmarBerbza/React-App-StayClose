import React from 'react'
import styles from '../styles'
import {  stay_logo } from '../assets'
import { footerLinks, socialMedia } from '../constant'
 
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        <a href="/">  
          <img src={stay_logo} alt="hoobank_logo" className='w-[200px] h-[200px] object-contain' />
        </a>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10 ">
        {footerLinks.map(footerlink=> (
          <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[72px] text-white'>{footerlink.title}</h4>
            <ul className='list-none mt-4'>
              {footerlink.links.map((link, index)=>(
                <li key={link.name} className={`font-poppins font-normal text[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-800'>
      <p className='font-poppins font-normal text-center text-[14px] leading-[72px] text-white'>Copyright &copy; 2024 StayClose <span className='text-gray-400'> (by Omar Berbza)</span>. All Rights Reserved.</p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((media, index)=>(
          <a href={media.link} target='_blank'>
            <img src={media.icon} alt={media.id} key={media.id} 
              className={`w-[21px] h-[21px] object-contain cursor-pointer hover:w-[25px] hover:h-[25px] transition-all duration-200 ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer
