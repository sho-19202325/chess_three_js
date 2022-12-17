import { calculatePositionFromPlace } from "common/utils";
import { Suspense } from "react";
import { PieceProps } from "../../common/types";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Luke } from "./Luke";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";

export const Piece = ({ name, place }:PieceProps) => {
  const position = calculatePositionFromPlace(place)

  const renderPiece = () => {
    switch (name) {
      case "Pawn":
        return <Pawn />
      case "Luke":
        return <Luke />
      case "Knight":
        return <Knight />
      case "Bishop":
        return <Bishop />
      case "Queen":
        return <Queen />
      default:
        return <King />
    }
  }

  return (
    <Suspense fallback={null}>
      <mesh position={position} >
        { renderPiece() }
      </mesh>
    </Suspense>
  )
}