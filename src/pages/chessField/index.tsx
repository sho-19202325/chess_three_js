import { Canvas } from "@react-three/fiber"
import { XyzSpace } from "types/common"
import { ChessBoard } from "components/ChessBoard"
import { PlayerPieces } from "components/PlayerPieces"
import FieldContextProvider from "contexts/FieldContext"
import { PlayerInfo } from "components/PlayerInfo"

const CAMERA_PROPS = {
  fov: 60,
  position: [0, -5, 7] as XyzSpace
}

export const ChessField = () => {
  return (
    <FieldContextProvider>
      <PlayerInfo />
      <Canvas camera={CAMERA_PROPS}>
        <axesHelper scale={25} />
        <ambientLight />
          <ChessBoard />
          <PlayerPieces player={1} />
          <PlayerPieces player={2} />
      </Canvas>
    </FieldContextProvider>
  )
}
