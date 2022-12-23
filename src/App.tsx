import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import System from './components/three/objects/System';
import GalaxyCamera from './components/three/camera/GalaxyCamera';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Canvas className='canvas'>
        <GalaxyCamera />
        <Stars
          radius={100}
          depth={500}
          count={2500}
          factor={4}
          saturation={0}
          fade speed={1}
        />
        <System />
      </Canvas>
    </div>
  );
}

export default App;
