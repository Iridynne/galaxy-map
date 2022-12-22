import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Body, { BodyProps } from './Body';

export type PlanetProps = {} & BodyProps;

const Planet = ({
    mass,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
}: PlanetProps) => {
    const texture = useLoader(TextureLoader, "/textures/earth_day.jpg");

    return (
        <>
            <pointLight intensity={1} />
            <Body
                mass={mass}
                position={position}
                velocity={velocity}
                materialProps={{
                    map: texture,
                }}
            />
        </>
    );
}

export default Planet;