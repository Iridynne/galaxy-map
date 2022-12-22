import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import "./App.css"
import System from './components/three-objects/System';

function App() {
  return (
    <div className="App">
      <Canvas className='canvas'>
        <OrbitControls
          enableZoom={true}
          minDistance={1}
          maxDistance={1000}
          zoom0={1000}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
        <System />
      </Canvas>
    </div>
  );
}

export default App;
