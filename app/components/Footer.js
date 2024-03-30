import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'
const Footer = () => {
  return (
    <div className='bg-[#0c0303]  flex justify-between items-center py-4 px-5'>
      <p className='text-yellow-300 font-bold' style={{fontFamily:"'Roboto', sans-serif"}}>Copyright &copy; Dipen Kalsi , 2023. All rights reserved.</p>
      <div className='text-yellow-300 flex space-x-6'>
        <a href="https://github.com/kesaviwebsolutions/WHAM-lotto" target="_blank" rel="noopener noreferrer">
          <BsGithub size="25px"/>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size="25px"/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <BsInstagram size="25px"/>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <BsTwitter size="25px"/>
        </a>
      </div>
    </div>
    
  )
}

export default Footer
