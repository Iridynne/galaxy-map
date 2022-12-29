import React from 'react';

import { OrbitControls } from '@react-three/drei';
import { Vector3Tuple } from 'three';

type SetProps = {
    target: Vector3Tuple,
    distance: number,
};

type CameraContext = {
    GalaxyCamera: () => JSX.Element,
    setTarget: (props: SetProps) => void,
};

const cameraContext = React.createContext({} as CameraContext);

export const useCamera = () => React.useContext(cameraContext);

const useProvideCamera = (): CameraContext => {
    const [target, setTarget] = React.useState([0, 0, 0] as Vector3Tuple);
    const [distance, setDistance] = React.useState(200);

    const handleTarget = ({
        target,
        distance,
    }: SetProps) => {
        setTarget(target);
        setDistance(distance);
    };

    const GalaxyCamera = () => (
        <OrbitControls
            makeDefault
            target={target}
            minDistance={distance}
            maxDistance={distance * 2}
            rotateSpeed={1}
            zoomSpeed={1}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={2 *Math.PI / 3} />
    );

    return {
        GalaxyCamera,
        setTarget: handleTarget,
    }
};

export const ProvideCamera = ({children}: {children: React.ReactNode}) => {
    const cameraProvider = useProvideCamera();

    return (
        <cameraContext.Provider value={cameraProvider}>
            {children}
        </cameraContext.Provider>
    )
};
