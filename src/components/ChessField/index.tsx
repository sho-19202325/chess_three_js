import { caluculatePosition } from "../../common/utils"
import { ChessBoard } from "../ChessBoard"
import { Pawn } from "../Pawn"

export const ChessField = () => {
  return (
    <>
      <ChessBoard />
      <Pawn position={caluculatePosition([1, 2])} />
      <Pawn position={caluculatePosition([2, 2])} />
      <Pawn position={caluculatePosition([3, 2])} />
      <Pawn position={caluculatePosition([4, 2])} />
      <Pawn position={caluculatePosition([5, 2])} />
      <Pawn position={caluculatePosition([6, 2])} />
      <Pawn position={caluculatePosition([7, 2])} />
      <Pawn position={caluculatePosition([8, 2])} />
    </>
  )
}