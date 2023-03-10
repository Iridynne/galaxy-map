import { Stars, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PCFSoftShadowMap } from 'three';

import System from './components/three/objects/System';
import GalaxyCamera from './components/three/camera/GalaxyCamera';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Stats />
      <Canvas className='canvas' shadows={{ type: PCFSoftShadowMap }}>
        <GalaxyCamera />
        <Stars
          radius={10}
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
