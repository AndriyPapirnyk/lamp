import { useState } from 'react';
import './App.css';

interface SmartLamp {
  turnOn() : void;
  setBrightness(brightness: number) : void;
  setColor(color: string) : void;
}

function App() {
  const [status, setStatus] = useState<boolean>(false)
  const [brightness, setBrightness] = useState<number>(5);
  const [color, setColor] = useState<string>('#ffdd00')

  const LampOptions : SmartLamp = {
    turnOn: () => {
      status ? console.log("Lamp is turned on!") : console.log("Lamp is turned off!")
      setStatus(!status);
    },
    setBrightness: (brightness) => {
        console.log(`Brightness is set to ${brightness * 10}%`);
        setBrightness(brightness)
    },
    setColor: (color) => {
        console.log(`Color is set to ${color}`);
        setColor(color);
    }
  }


  return (
    <div className='wrap'>
      <h1>Lamp</h1>
      {status ? (
        <div className='lamp' style={{backgroundColor: color, opacity: brightness / 10, boxShadow: `0 0 15px ${color}`}}></div>
      ) : (
        <div className="turnedOffLamp"></div>
      )}
    <main>
      <button className='switch' onClick={LampOptions.turnOn}></button>
      <label>
        <input type="color" value={color} onChange={(e) => LampOptions.setColor(e.target.value)}/>
        <div className="circle"></div>
      </label>      
      <div className='brightness__holder'>
        <input className='brightness' type="range" min={1} max={10} value={brightness} onChange={(e) => {LampOptions.setBrightness(parseInt(e.target.value))}} />
        <span>{brightness * 10}%</span>
      </div>
    </main>
    </div>
  )
}

export default App
