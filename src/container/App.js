import React from 'react';
import '../style/App.css';

import Header from '../component/Header'
import OpenSource from '../component/OpenSource'
import TechShare from '../component/TechShare'
import Life from '../component/Life'

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <OpenSource />
      <TechShare />
      <Life />
    </div>
  );
}

export default App;
