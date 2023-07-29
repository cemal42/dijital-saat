import { useEffect, useState } from "react";
import './App.css'
import 'animate.css'

function App() {
  
  const getDate = () =>{
    return new Date().toLocaleTimeString()
  } 

  const [currentTime, setCurrentTime] = useState(getDate())

  const clockFunc = setInterval(() => {
    setCurrentTime(getDate())
    clearInterval(clockFunc)
  }, 1000)

  useEffect(() => {
    const clockAnimate =  document.getElementById('clock-animate')
    clockAnimate.setAttribute('class', 'animate__animated animate__bounceInLeft')
  }, [])

  return (

    <div className="App">
      <div>
        <h1 id="clock-animate">
          {currentTime}
        </h1>
      </div>
    </div>
  );
}

export default App;
