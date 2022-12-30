import { Canvas } from "@react-three/fiber"
import { PromotionPieceName, XyzSpace } from "types/common"
import { ChessBoard } from "components/ChessBoard"
import { PlayerPieces } from "components/PlayerPieces"
import { PlayerInfo } from "components/PlayerInfo"
import { useContext, useEffect, useState } from "react"
import { FieldContext } from "contexts/FieldContext"
import { finishTurn } from "./actions"
import { PromotionModal } from "components/PromotionModal"
import { PROMOTION_PLACE_Y_FOR_PLAYER_1, PROMOTION_PLACE_Y_FOR_PLAYER_2 } from "consts/chessBoard"
import { WinnerModal } from "components/WinnerModal"

const CAMERA_PROPS = {
  fov: 60,
  position: [0, -5, 7] as XyzSpace
}

export const ChessField = () => {
  const { state, dispatch } = useContext(FieldContext)
  const [ openPromotionModal, setOpenPromotionModal ] = useState<boolean>(false)
  const [ openWinnerModal, setOpenWinnerModal ] = useState<boolean>(false)

  useEffect(() => {
    if (state.phase !== "FINISH_TURN") return

    // 勝敗が決定しているかどうかの判定
    if (state.winner !== null) return setOpenWinnerModal(true)

    // promotionが必要かどうかの判定
    const promotionPlaceY = state.currentPlayer === 1 ? PROMOTION_PLACE_Y_FOR_PLAYER_1 : PROMOTION_PLACE_Y_FOR_PLAYER_2
    if (state.selectedPiece.name === "Pawn" && state.targetPlace[1] === promotionPlaceY) return setOpenPromotionModal(true)

    dispatch(finishTurn(state))
  }, [state, dispatch])

  const handlePromotion = (promotionPieceName: PromotionPieceName) => {
    dispatch(finishTurn(state, promotionPieceName))
    setOpenPromotionModal(false)
  }

  const handleCloseWinnerModal = () => {
    setOpenWinnerModal(false)
    window.location.reload()
  }

  return (
    <>
      <PlayerInfo />
      <PromotionModal open={openPromotionModal} handlePromotion={handlePromotion} />
      <WinnerModal open={openWinnerModal} handleCloseWinnerModal={handleCloseWinnerModal} />
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
