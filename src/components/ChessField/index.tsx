import { ChessBoard } from "../ChessBoard"
import { Pawn } from "../Pawn"

export const ChessField = () => {
  return (
    <>
      <ChessBoard />
      <Pawn place={[1, 2]} />
      <Pawn place={[2, 2]} />
      <Pawn place={[3, 2]} />
      <Pawn place={[4, 2]} />
      <Pawn place={[5, 2]} />
      <Pawn place={[6, 2]} />
      <Pawn place={[7, 2]} />
      <Pawn place={[8, 2]} />
    </>
  )
}