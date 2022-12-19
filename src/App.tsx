import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import "./assets/styles/App.css"
import System from './components/objects/System';
import Menu from './components/ui/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Canvas className='canvas'>
        <OrbitControls
          enableZoom={true}
          minDistance={2}
          maxDistance={15}
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
