import React from 'react'
import Cast from './sections/Cast'
import Home from './sections/Home'
import Seasons from './sections/Seasons'

import './App.css'

function App() {
  return (
    <>
      <div className="responsive">
        <p>NOT RESPONSIVE YET</p>
      </div>
      <main className="main">
        <div className="clouds">
          <Home/>
          <Cast/>
        </div>
        <Seasons/>
      </main>
    </>
  )
}

export default App