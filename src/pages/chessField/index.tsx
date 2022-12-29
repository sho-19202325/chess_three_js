import { Canvas } from "@react-three/fiber"
import { XyzSpace } from "types/common"
import { ChessBoard } from "components/ChessBoard"
import { PlayerPieces } from "components/PlayerPieces"
import { PlayerInfo } from "components/PlayerInfo"
import { useContext, useEffect } from "react"
import { FieldContext } from "contexts/FieldContext"
import { finishTurn } from "./actions"

const CAMERA_PROPS = {
  fov: 60,
  position: [0, -5, 7] as XyzSpace
}

export const ChessField = () => {
  const { state, dispatch } = useContext(FieldContext)

  useEffect(() => {
    if (state.phase !== "FINISH_TURN") return
    if (state.winner === null) return dispatch(finishTurn(state))

    // winnerが決定したら、確認ダイアログを出し、画面をリロードする。
    if (window.confirm(`Player ${state.winner}の勝利です!\n最初からゲームを始めるにはOKボタンを押してください。`)) window.location.reload()
  }, [state, dispatch])

  return (
    <>
      <PlayerInfo />
      <Canvas camera={CAMERA_PROPS}>
        <axesHelper scale={25} />
        <ambientLight />
          <ChessBoard />
          <PlayerPieces player={1} />
          <PlayerPieces player={2} />
      </Canvas>
    </>
  )
}
