import { ThreeEvent } from "@react-three/fiber";
import { calculatePositionFromPlace } from "common/utils";
import { Suspense } from "react";
import { PieceInfo } from "../../common/types";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Luke } from "./Luke";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";

type PieceProps = PieceInfo & {
  handleSelectPiece: (piece: PieceInfo) => void
}

export const Piece = ({ name, place, handleSelectPiece }:PieceProps) => {
  const position = calculatePositionFromPlace(place)
  const handleClickPiece = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    const piece:PieceInfo = { name, place }
    handleSelectPiece(piece)
  }

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
      <mesh position={position} onPointerDown={(e) => handleClickPiece(e)} >
        { renderPiece() }
      </mesh>
    </Suspense>
  )
}