import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Euler, Mesh, RingGeometry, TextureLoader, Vector3 } from 'three';
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
    // Ring Texture
    const ring = useLoader(TextureLoader, `/textures/${ringFile}`);

    const meshRef1 = React.useRef<Mesh>(null);
    const meshRef2 = React.useRef<Mesh>(null);

    // Handling Axis Rotation
    useFrame(() => {
        if (!meshRef1.current || !meshRef2.current) return;

        meshRef1.current.rotation.z += 1 / rotationPeriod * Math.pow(10, -3);
        meshRef2.current.rotation.z -= 1 / rotationPeriod * Math.pow(10, -3);
    });

    // Handling UV Mapping for ring
    const geometry = new RingGeometry(size + PlanetSize.Earth, size + 6 * PlanetSize.Earth, 64);
    var pos = geometry.attributes.position;
    var v3 = new Vector3();
    for (let i = 0; i < pos.count; i++){
        v3.fromBufferAttribute(pos, i);
        geometry.attributes.uv.setXY(i, v3.length() < size + PlanetSize.Earth + 1 ? 0 : 1, 1);
    }

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
            <mesh
                ref={meshRef1}
                position={[position[0], position[1] + 0.25, position[2]]}
                rotation={new Euler(- Math.PI / 2, 0, 0)}
                geometry={geometry}
                castShadow
                receiveShadow
            >
                <meshLambertMaterial
                    attach="material"
                    map={ring}
                    transparent
                />
            </mesh>
            <mesh
                ref={meshRef2}
                position={[position[0], position[1] - 0.25, position[2]]}
                rotation={new Euler(Math.PI / 2, 0, 0)}
                geometry={geometry}
                castShadow
                receiveShadow
            >
                <meshLambertMaterial
                    attach="material"
                    map={ring}
                    transparent
                />
            </mesh>
        </>
    );
}

export default RingedPlanet;