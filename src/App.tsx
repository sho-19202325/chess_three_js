import { Canvas } from '@react-three/fiber';
import { ChessBoard } from './components/ChessBoard';
import { XyzSpace } from './common/types';

const CAMERA_PROPS = {
  fov: 60,
  position: [0, 0, 10] as XyzSpace
}

function App() {
  return (
    <Canvas camera={CAMERA_PROPS}>
      <axesHelper scale={25} />
      <ambientLight />
      <ChessBoard />
    </Canvas>
  );
}

export default App;
