import { ALL_PLACES, HORIZONTAL_SQUARE_COUNT, SIDE_LENGTH_OF_SQUARE, VIRTICAL_SQUARE_COUNT } from "../../common/constants";
import { XyzSpace } from "../../common/types";
import { Square } from "../Square";

export const ChessBoard = () => {
  const allSquare = ALL_PLACES.map((place) => {
    const [column, row] = place

    const squareIndex = (VIRTICAL_SQUARE_COUNT * (row - 1) + column)
    const squarePosition:XyzSpace = [
      column * SIDE_LENGTH_OF_SQUARE - (VIRTICAL_SQUARE_COUNT + SIDE_LENGTH_OF_SQUARE) / 2,
      row * SIDE_LENGTH_OF_SQUARE - (HORIZONTAL_SQUARE_COUNT + SIDE_LENGTH_OF_SQUARE) / 2,
      0
    ]
    const isBlack = (column + row) % 2 !== 0
    return <Square key={squareIndex} position={squarePosition} isBlack={isBlack} />
  })

  return (
    <>
      {allSquare}
    </>
  )
}
