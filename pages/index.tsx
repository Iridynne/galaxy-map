import GMBody from "@/components/three/body";
import GMCamera from "@/components/three/camera";
import GMCanvas from "@/components/three/canvas";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="w-screen h-screen">
            <GMCanvas>
                <GMCamera makeDefault minDistance={2} maxDistance={8} zoomSpeed={2} />
                <GMBody size={1} />
            </GMCanvas>
        </div>
    );
};

export default Home;
