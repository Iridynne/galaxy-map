import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import System from './components/three/objects/System';
import PostProcess from './components/three/postprocessing/PostProcess';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Canvas className='canvas'>
        <PostProcess />
        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={15}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={(- Math.PI) / 2}
        />
        <System />
      </Canvas>
    </div>
  );
}

export default App;
