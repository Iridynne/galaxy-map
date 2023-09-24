import GMPlanet from "@/components/three/planet";
import GMCamera from "@/components/three/camera";
import GMCanvas from "@/components/three/canvas";
import { NextPageWithLayout } from "./_app";
import GMStar from "@/components/three/star";

const Home: NextPageWithLayout = () => (
    <GMCanvas>
        <GMCamera makeDefault minDistance={2} maxDistance={8} zoomSpeed={2} />
        <GMStar size={1} color="orangered" />
        <GMStar size={1} position={[3, 0, 0]} color="royalblue" lightIntensity={40} />
        <GMPlanet size={1} position={[-3, 0, 0]} texture="textures/earth.jpg" />
    </GMCanvas>
);

Home.getLayout = (props) => (
    <div className="w-screen h-screen">
        {props}
    </div>
);

export default Home;
