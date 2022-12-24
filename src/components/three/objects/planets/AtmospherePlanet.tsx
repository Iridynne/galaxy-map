import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import Planet, { PlanetProps } from './Planet';

type AtmospherePlanetProps = {
    atmosphereFile: string,
} & PlanetProps;

const AtmospherePlanet = ({
    size,
    mass,
    rotationPeriod,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    textureFile,
    atmosphereFile,
}: AtmospherePlanetProps) => {
    const atmosphere = useLoader(TextureLoader, `/textures/${atmosphereFile}`);

    const meshRef = React.useRef<Mesh>(null);
    
    useFrame(() => {
        if (!meshRef.current) return;

        meshRef.current.rotation.y += 1 / rotationPeriod * Math.pow(10, -3);
    });

    return (
        <>
            <Planet
                size={size}
                mass={mass}
                rotationPeriod={rotationPeriod}
                position={position}
                velocity={velocity}
                textureFile={textureFile}
                castShadow
                receiveShadow
            />
            <mesh ref={meshRef} position={position}>
                <sphereBufferGeometry args={[size]} />
                <meshLambertMaterial
                    alphaMap={atmosphere}
                    transparent
                />
            </mesh>
        </>
    );
}

export default AtmospherePlanet;