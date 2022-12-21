import { PieceInfo } from "common/types"
import { Piece } from "components/Piece"
import { FieldContext } from "contexts/FieldContext"
import { selectPiece } from "pages/chessField/actions"
import { useContext } from "react"
import { Player } from "common/types"

export const PlayerPieces = ({ player }: { player: Player }) => {
  const { state, dispatch } = useContext(FieldContext)
  const ownPieces = state.playerPieces[player]

  const handleSelectPiece = (piece: PieceInfo) => {
    if (state.currentPlayer !== player ||
        (state.phase !== "SELECT_PIECE" && state.phase !== "SELECT_SQUARE")
    ) return

    dispatch(selectPiece(state, piece))
  }

  return (
    <>
      {ownPieces.map((item, index) => {
        return <Piece 
                 key={index}
                 piece={item}
                 handleSelectPiece={handleSelectPiece}
               />
      })}
    </>
  )
}
