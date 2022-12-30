import { isIncludeSamePlace } from "utils/place";
import { FieldContext } from "contexts/FieldContext";
import { useContext } from "react";
import { ALL_PLACES, VIRTICAL_SQUARE_COUNT } from "consts/chessBoard";
import { Square } from "../Square";

export const ChessBoard = () => {
  const { state } = useContext(FieldContext)
  const allSquare = ALL_PLACES.map((place) => {
    const [column, row] = place

    const squareIndex = (VIRTICAL_SQUARE_COUNT * (row - 1) + column)
    const isBlack = (column + row) % 2 !== 0
    const isActive = state.phase === "SELECT_TARGET_PLACE" && isIncludeSamePlace(place, state.availablePlaces)
    return <Square key={squareIndex} place={place} isBlack={isBlack} isActive={isActive} />
  })

  return (
    <>
      {allSquare}
    </>
  )
}
