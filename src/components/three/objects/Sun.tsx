import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Body, { BodyProps } from './Body';

export type SunProps = {} & BodyProps;

const Sun = ({
    mass,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
}: BodyProps) => {
    const texture = useLoader(TextureLoader, "/textures/sun.jpg");

    return (
        <>
            <pointLight intensity={1} />
            <Body
                mass={mass}
                position={position}
                velocity={velocity}
                materialProps={{
                    emissive: "white",
                    emissiveIntensity: 1,
                    emissiveMap: texture,
                }}
            />
            
        </>
    );
}

export default Sun;