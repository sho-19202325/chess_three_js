import { PieceProps } from "../../common/types";
import { Bishop } from "../Bishop";
import { King } from "../King";
import { Knight } from "../Knight";
import { Luke } from "../Luke";
import { Pawn } from "../Pawn";
import { Queen } from "../Queen";

export const Piece = ({ name, place }:PieceProps) => {
  const renderPiece = () => {
    switch (name) {
      case "Pawn":
        return <Pawn place={place} />
      case "Luke":
        return <Luke place={place} />
      case "Knight":
        return <Knight place={place} />
      case "Bishop":
        return <Bishop place={place} />
      case "Queen":
        return <Queen place={place} />
      default:
        return <King place={place} />
    }
  }

  return <>{renderPiece()}</>
}