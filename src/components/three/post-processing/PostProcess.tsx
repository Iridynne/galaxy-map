import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';

const PostProcess = () => {
    return (
        <EffectComposer>
            <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={300}
            />
        </EffectComposer>
    );
};

export default PostProcess;