import { Canvas } from '@react-three/fiber';
import { XyzSpace } from './common/types';
import { ChessField } from './components/ChessField';

const CAMERA_PROPS = {
  fov: 60,
  position: [0, -5, 7] as XyzSpace
}

function App() {
  return (
    <Canvas camera={CAMERA_PROPS}>
      <axesHelper scale={25} />
      <ambientLight />
      <ChessField />
    </Canvas>
  );
}

export default App;
