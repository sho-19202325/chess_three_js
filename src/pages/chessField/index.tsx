import React from "react"
import { Canvas } from "@react-three/fiber"
import { XyzSpace } from "common/types"
import { ChessBoard } from "components/ChessBoard"
import { PlayerPieces } from "components/PlayerPieces"

const CAMERA_PROPS = {
  fov: 60,
  position: [0, -5, 7] as XyzSpace
}

export const ChessField = () => {
  return (
    <Canvas camera={CAMERA_PROPS}>
      <axesHelper scale={25} />
      <ambientLight />
      <ChessBoard />
      <PlayerPieces playerId={1} />
      <PlayerPieces playerId={2} />
    </Canvas>
  )
}
