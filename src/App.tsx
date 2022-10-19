import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AnimatedText from './components/animatedText'
import AnimatedElipsis from './components/AnimatedElipsis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <AnimatedText data={[
  'Krowdy 1',
  'Krowdy 2',
  'Krowdy 3',
  'Krowdy 4'
]}/>
    <AnimatedElipsis />
    </div>
  )
}

export default App
