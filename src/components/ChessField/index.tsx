import { PieceProps } from "../../common/types"
import { ChessBoard } from "../ChessBoard"
import { Piece } from "../Piece"

const INITIAL_PICES:PieceProps[] = [
  { name: "Pawn", place: [1, 2] },
  { name: "Pawn", place: [2, 2] },
  { name: "Pawn", place: [3, 2] },
  { name: "Pawn", place: [4, 2] },
  { name: "Pawn", place: [5, 2] },
  { name: "Pawn", place: [6, 2] },
  { name: "Pawn", place: [7, 2] },
  { name: "Pawn", place: [8, 2] },
  { name: "Luke", place: [1, 1]},
  { name: "Luke", place: [8, 1]},
  { name: "Knight", place: [2, 1]},
  { name: "Knight", place: [7, 1]},
  { name: "Bishop", place: [3, 1]},
  { name: "Bishop", place: [6, 1]},
  { name: "Queen", place: [4, 1]},
  { name: "King", place: [5, 1]}
]

export const ChessField = () => {
  return (
    <>
      <ChessBoard />
      {INITIAL_PICES.map((item, index) => {
        return <Piece key={index} name={item.name} place={item.place} />
      })}
    </>
  )
}