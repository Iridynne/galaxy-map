import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { DoubleSide, Euler, Mesh, TextureLoader } from 'three';
import Planet, { PlanetProps } from './Planet';
import { PlanetSize } from '../../../../helpers/Constants';

type RingedPlanetProps = {
    ringFile: string,
} & PlanetProps;

const RingedPlanet = ({
    size,
    mass,
    rotationPeriod,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    textureFile,
    ringFile,
}: RingedPlanetProps) => {
    const ring = useLoader(TextureLoader, `/textures/${ringFile}`);

    const meshRef = React.useRef<Mesh>(null);
    
    useFrame(() => {
        if (!meshRef.current) {
            return;
        }

        meshRef.current.rotation.z += 1 / rotationPeriod * Math.pow(10, -3);
    })

    return (
        <>
            <Planet
                size={size}
                mass={mass}
                rotationPeriod={rotationPeriod}
                position={position}
                velocity={velocity}
                textureFile={textureFile}
            />
            <mesh ref={meshRef} position={position} rotation={new Euler(- Math.PI / 2, 0, 0)}>
                <ringBufferGeometry args={[size + PlanetSize.Earth, size, 30, 1]} />
                <meshLambertMaterial
                    side={DoubleSide}
                    map={ring}
                    transparent
                />
            </mesh>
        </>
    );
}

export default RingedPlanet;