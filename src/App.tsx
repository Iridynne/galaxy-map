import { Stars, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PCFSoftShadowMap } from 'three';

import System from './components/three/objects/System';

import "./App.css"
import PostProcess from './components/three/camera/PostProcess';

function App() {
  return (
    <div className="App">
      <Stats />
      <Canvas className='canvas' shadows={{ type: PCFSoftShadowMap }}>
        <PostProcess />
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
