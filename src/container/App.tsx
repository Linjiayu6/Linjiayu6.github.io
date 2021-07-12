import React from 'react'
import Header from '../component/header'
import OpenSource from '../component/open-source'
import TechShare from '../component/tech-share'
import Life from '../component/life'

import useSize from '../hook/use-size'

import '../style/App.css'

function App () {
  const { width } = useSize();

  const _scale = width > 1024 ? 1 : Math.max(0.85, width / 1024)

  return (
    <div className="App" style={{ 
      transform: `scale(${_scale})`,
      margin: _scale === 1 ? '50px' : 0
    }}>
      <Header />
      <hr />
      <OpenSource />
      <TechShare />
      <Life />
    </div>
  )
}

export default App
