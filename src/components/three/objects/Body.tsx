import React from 'react';
import { MeshLambertMaterialProps, useFrame } from '@react-three/fiber';
import { Mesh, Vector3Tuple } from 'three';

export type BodyProps = {
    size: number,
    mass: number,
    position?: Vector3Tuple,
    velocity?: Vector3Tuple,
    materialProps?: MeshLambertMaterialProps,
    rotationPeriod: number,
};

const Body = ({
    size,
    mass,
    rotationPeriod,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    materialProps,
}: BodyProps) => {
    const mesh = React.useRef<Mesh>(null);

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.y += 1 / rotationPeriod * Math.pow(10, -3);
    });

    return (
    <mesh ref={mesh} position={position}>
        <sphereBufferGeometry
            attach="geometry"
            args={[size]}
        />
        <meshLambertMaterial
            attach="material"
            color="white"
            {...materialProps}
        />
    </mesh>
    );
}

export default Body;