import { useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'

const messages = [
  "Ponnuseeyyy 😺",
  "You are stronger than you think 💪",
  "You make the world brighter 🌟",
  "Your smile is contagious 😄",
  "You're doing amazing, keep going! 🚀",
  "You are loved more than you know ❤️",
  "Never forget how awesome you are! 🤗"
]

export default function App() {
  const [message, setMessage] = useState(messages[0])
  const [showConfetti, setShowConfetti] = useState(false)
  const [width, height] = useWindowSize()

  const handleClick = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)]
    setMessage(randomMsg)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1500)
  }

  return (
    <div className="container">
      {showConfetti && <Confetti width={width} height={height} />}
      <h1>Hey You! 😊</h1>
      <p className="message">{message}</p>
      <button onClick={handleClick}>Show me more ❤️</button>
    </div>
  )
}
