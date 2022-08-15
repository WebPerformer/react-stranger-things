import React from 'react'
import Logo from '../assets/img/Logo.png'

function Header() {
  return (
    <header>
        <div className="content">
            <img src={Logo} alt="" />
        </div>
    </header>
  )
}

export default Header