import { PieceProps } from "../../common/types"
import { Bishop } from "../Bishop"
import { ChessBoard } from "../ChessBoard"
import { King } from "../King"
import { Knight } from "../Knight"
import { Luke } from "../Luke"
import { Pawn } from "../Pawn"
import { Queen } from "../Queen"

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
      <Luke place={[1, 1]} />
      <Luke place={[8, 1]} />
      <Bishop place={[2, 1]} />
      <Bishop place={[7, 1]} />
      <Knight place={[3, 1]} />
      <Knight place={[6, 1]} />
      <Queen place={[4, 1]} />
      <King place={[5, 1]} />
    </>
  )
}