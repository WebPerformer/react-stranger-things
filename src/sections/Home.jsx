import React from 'react'
import Header from '../components/Header'
import Card from '../assets/img/Card.jpg'
import Logo from '../assets/img/Stranger-Things-logo.png'

import { BsPlayCircle } from 'react-icons/bs'

function Home() {

  return (
    <>
      <Header/>
      <section className="home">
        <div className="content">
            <div className="left">
              <img src={Card} alt="" className="card" />
            </div>
            <div className="right">
               <div className="player">
                <div className="cover"></div>
                <div className="play-btn">
                  <BsPlayCircle/>
                </div>
                <div className="logo-stranger">
                  <img src={Logo} alt="" />
                </div>
                <div className="pin">new</div>
              </div>
              <div className="classification">
                <div className="age">16</div>
                <div className="year">2022</div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home