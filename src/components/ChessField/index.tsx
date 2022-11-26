import { PlayerPieces } from "components/PlayerPieces"
import { ChessBoard } from "../ChessBoard"

export const ChessField = () => {
  return (
    <>
      <ChessBoard />
      <PlayerPieces playerId={1} />
      <PlayerPieces playerId={2} />
    </>
  )
}