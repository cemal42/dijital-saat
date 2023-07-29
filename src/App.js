import { useEffect, useState } from "react";
import './App.css'
import 'animate.css'

function App() {
  
  let time = new Date().toLocaleTimeString()

  const [currentTime, setCurrentTime] = useState(time)

  const clockFunc = setInterval(() => {
    setCurrentTime(time)
    clearInterval(clockFunc)
  }, 1000)

  useEffect(() => {
    const clockAnimate =  document.getElementById('clock-animate')
    clockAnimate.setAttribute('class', 'animate__animated animate__zoomInLeft')
  }, [])

  return (

    <div className="App">
        <div id="clock-animate"> 
          {currentTime}
        </div>
    </div>
  );
}

export default App;
