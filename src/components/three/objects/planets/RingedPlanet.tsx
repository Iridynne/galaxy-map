import React from 'react';
import { useLoader } from '@react-three/fiber';
import { DoubleSide, Euler, TextureLoader } from 'three';
import Planet, { PlanetProps } from './Planet';
import { PlanetSize } from '../../../../helpers/Constants';

type RingedPlanetProps = {
    ringFile: string,
} & PlanetProps;

const RingedPlanet = ({
    size,
    mass,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    textureFile,
    ringFile,
}: RingedPlanetProps) => {
    const ring = useLoader(TextureLoader, `/textures/${ringFile}`);

    return (
        <>
            <Planet
                size={size}
                mass={mass}
                position={position}
                velocity={velocity}
                textureFile={textureFile}
            />
            <mesh position={position} rotation={new Euler(Math.PI / 2, 0, 0)}>
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