import React from 'react'
import Logo from '../assets/img/Logo.png'
import Stranger from '../assets/img/Stranger-Things-logo.png'
import Fox from '../assets/img/Fox Shield.png'
import { GoPrimitiveDot } from 'react-icons/go'

function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src={Logo} alt="" />
            <GoPrimitiveDot/>
            <img src={Stranger} alt="" />
            <GoPrimitiveDot/>
            <img className='fox' src={Fox} alt="" />
        </div>
    </footer>
  )
}

export default Footer