import { EffectComposer, Bloom } from '@react-three/postprocessing';

const PostProcess = () => {
    return (
        <EffectComposer autoClear={false}>
            <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={300}
            />
        </EffectComposer>
    );
};

export default PostProcess;