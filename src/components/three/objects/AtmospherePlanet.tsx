import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Planet, { PlanetProps } from './Planet';

type AtmospherePlanetProps = {
    atmosphereFile: string,
} & PlanetProps;

const AtmospherePlanet = ({
    mass,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    textureFile,
    atmosphereFile,
}: AtmospherePlanetProps) => {
    const atmosphere = useLoader(TextureLoader, `/textures/${atmosphereFile}`);

    return (
        <>
            <Planet
                mass={mass}
                position={position}
                velocity={velocity}
                textureFile={textureFile}
            />
            <mesh position={position}>
                <sphereBufferGeometry />
                <meshLambertMaterial
                    alphaMap={atmosphere}
                    transparent
                />
            </mesh>
        </>
    );
}

export default AtmospherePlanet;