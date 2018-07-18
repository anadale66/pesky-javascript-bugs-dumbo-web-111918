import React from 'react'
import NoBugsHere from './components/NoBugsHere'
import NothingToFixHere from './components/NothingToFixHere'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React Bugs!</h1>
    </header>
    <br />
    <NothingToFixHere time={new Date()} />
    <br />
    <br />
    <NoBugsHere />
  </div>
)

export default App
