import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import System from "./components/System";

export default function App() {
  return (
    <div className="App">
      <Canvas className="canvas">
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
