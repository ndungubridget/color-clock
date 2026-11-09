import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  // Store the current date and time
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer)
  }, [])

  // Format the time and date using date-fns
  const time = format(currentTime, 'hh:mm:ss a')
  const date = format(currentTime, 'EEEE, MMMM do, yyyy')

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1>Color Clock</h1>

        <p className="subtitle">
          Your time, beautifully displayed.
        </p>

        <div className="clock">
          {time}
        </div>

        <div className="date">
          {date}
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Live Clock
        </div>
      </div>

      <footer>
        Designed with React and date-fns
      </footer>
    </div>
  )
}

export default App
