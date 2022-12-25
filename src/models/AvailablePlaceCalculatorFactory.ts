import { PieceInfo, Place, Player } from "types/common"
import { AvailablePlaceCalculatorForLuke } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForLuke"
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
      case "Luke":
        return new AvailablePlaceCalculatorForLuke(piece, player, ownPlaces, opponentPlaces)
      default:
        throw new Error(`"${piece.name}"はAvailablePlaceCalculatorFactoryに登録されていません。`)
    }
  }
}
