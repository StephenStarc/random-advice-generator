import { useState } from 'react'
import backgroundimg from './assets/background.webp'
import './App.css'

function App() {
  const [randomAdvice, setRandomAdvice] = useState('Follow your passion,Never stop learning, and Take responsibility for your life')

  async function randomAdviceGenerator() {
    const advice = await fetch('https://api.adviceslip.com/advice')
    const data = await advice.json()
    setRandomAdvice(data.slip.advice);
  }
 
  return (
    <>
     <div className='background' style={{backgroundImage:`url(${backgroundimg})`}}>
      <div className='card'>
      <p id='advice'><q id='qoute'> {randomAdvice}</q> </p>
      <button onClick={randomAdviceGenerator}>Generate Advice</button>
      </div>
     </div>
    </>
  )
}

export default App
