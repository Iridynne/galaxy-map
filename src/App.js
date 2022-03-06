import "./assets/styles/App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import System from "./components/System";
import Menu from "./components/Menu";

export default function App() {
  return (
    <div className="App">
      <Menu />
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
