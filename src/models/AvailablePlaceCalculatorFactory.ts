import { PieceInfo, PieceName, Place, Player } from "common/types"
import { AvailablePlaceCalculatorForPawn } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForPawn"

export class AvailablePlaceCalculatorFactory {
  public static create (
    piece: PieceInfo,
    player: Player,
    ownPlaces: Place[],
    opponentPlaces: Place[]) 
  {
    switch (piece.name) {
      case "Pawn":
        return new AvailablePlaceCalculatorForPawn(piece, player, ownPlaces, opponentPlaces)
      // TODO: 他の駒のロジックも実装する
      default:
        throw new Error(`"${piece.name}"はAvailablePlaceCalculatorFactoryに登録されていません。`)
    }
  }
}
