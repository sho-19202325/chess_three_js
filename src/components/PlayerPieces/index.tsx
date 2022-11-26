import { PieceProps } from "common/types"
import { Piece } from "components/Piece"
import { useState } from "react"

const INITIAL_PICES_FOR_PLEYER_1:PieceProps[] = [
  { name: "Pawn", place: [1, 2] },
  { name: "Pawn", place: [2, 2] },
  { name: "Pawn", place: [3, 2] },
  { name: "Pawn", place: [4, 2] },
  { name: "Pawn", place: [5, 2] },
  { name: "Pawn", place: [6, 2] },
  { name: "Pawn", place: [7, 2] },
  { name: "Pawn", place: [8, 2] },
  { name: "Luke", place: [1, 1] },
  { name: "Luke", place: [8, 1] },
  { name: "Knight", place: [2, 1] },
  { name: "Knight", place: [7, 1] },
  { name: "Bishop", place: [3, 1] },
  { name: "Bishop", place: [6, 1] },
  { name: "Queen", place: [4, 1] },
  { name: "King", place: [5, 1] }
]

const INITIAL_PICES_FOR_PLEYER_2:PieceProps[] = [
  { name: "Pawn", place: [1, 7] },
  { name: "Pawn", place: [2, 7] },
  { name: "Pawn", place: [3, 7] },
  { name: "Pawn", place: [4, 7] },
  { name: "Pawn", place: [5, 7] },
  { name: "Pawn", place: [6, 7] },
  { name: "Pawn", place: [7, 7] },
  { name: "Pawn", place: [8, 7] },
  { name: "Luke", place: [1, 8] },
  { name: "Luke", place: [8, 8] },
  { name: "Knight", place: [2, 8] },
  { name: "Knight", place: [7, 8] },
  { name: "Bishop", place: [3, 8] },
  { name: "Bishop", place: [6, 8] },
  { name: "Queen", place: [5, 8] },
  { name: "King", place: [4, 8] }
]

type PlayerId = 1 | 2

export const PlayerPieces = ({ playerId }: { playerId:PlayerId }) => {
  const initial_pieces = playerId === 1 ? INITIAL_PICES_FOR_PLEYER_1 : INITIAL_PICES_FOR_PLEYER_2
  const [ownPices, setOwnPices] = useState<PieceProps[]>(initial_pieces)

  return (
    <>
      {ownPices.map((item, index) => {
        return <Piece key={index} name={item.name} place={item.place} />
      })}
    </>
  )
}
