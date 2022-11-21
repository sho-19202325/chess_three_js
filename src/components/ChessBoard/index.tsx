import { XyzSpace } from "../../common/types";
import { Square } from "../Square";


const BOARD_WIDTH = 8
const BOARD_HEIGHT = 8
const COLUMN_SPACE = 1
const ROW_SPACE = 1

export const ChessBoard = () => {
  const squares = []

  for (let column = 1; column <= BOARD_HEIGHT; column++) {
    for (let row = 1; row <= BOARD_WIDTH; row++) {
      const squareIndex = (BOARD_HEIGHT * (row - 1) + column)
      const squarePosition:XyzSpace = [
        column * COLUMN_SPACE - (BOARD_HEIGHT + COLUMN_SPACE)/2,
        row * ROW_SPACE - (BOARD_WIDTH + ROW_SPACE) / 2,
        0
      ]
      const isBlack = (column + row) % 2 !== 0

      squares.push(<Square key={squareIndex} position={squarePosition} isBlack={isBlack} />)
    }
  }

  return (
    <>
      {squares}
    </>
  )
}
