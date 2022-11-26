import { HORIZONTAL_SQUARE_COUNT, SIDE_LENGTH_OF_SQUARE, VIRTICAL_SQUARE_COUNT } from "../../common/constants";
import { XyzSpace } from "../../common/types";
import { Square } from "../Square";

export const ChessBoard = () => {
  const squares = []

  for (let column = 1; column <= VIRTICAL_SQUARE_COUNT; column++) {
    for (let row = 1; row <= HORIZONTAL_SQUARE_COUNT; row++) {
      const squareIndex = (VIRTICAL_SQUARE_COUNT * (row - 1) + column)
      const squarePosition:XyzSpace = [
        column * SIDE_LENGTH_OF_SQUARE - (VIRTICAL_SQUARE_COUNT + SIDE_LENGTH_OF_SQUARE)/2,
        row * SIDE_LENGTH_OF_SQUARE - (HORIZONTAL_SQUARE_COUNT + SIDE_LENGTH_OF_SQUARE) / 2,
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
