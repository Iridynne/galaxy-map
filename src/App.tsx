import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import System from './components/three/objects/System';
import PostProcess from './components/three/post-processing/PostProcess';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Canvas className='canvas'>
        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={15}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={2 *Math.PI / 3}
        />
        <PostProcess />
        <Stars
          radius={100}
          depth={50}
          count={5000}
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
