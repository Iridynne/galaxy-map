import { OrbitControls } from '@react-three/drei';

type CameraProps = {
    makeDefault?: boolean,
    minDistance?: number,
    maxDistance?: number,
    zoomSpeed?: number,
};

const GMCamera = (props: CameraProps) => (
    <OrbitControls
        {...props}
        enablePan={false}
    />
);

export default GMCamera;