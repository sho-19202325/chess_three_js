import { PieceInfo, Place, Player } from "types/common"
import { AvailablePlaceCalculatorForBishop } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForBishop"
import { AvailablePlaceCalculatorForLuke } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForLuke"
import { AvailablePlaceCalculatorForPawn } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForPawn"

export class AvailablePlaceCalculatorFactory {
  public static create (
    piece: PieceInfo,
    player: Player,
    ownPlaces: Place[],
    opponentPlaces: Place[]) 
  {
    const argsOfAvailablePlacesCalculator = [piece, player, ownPlaces, opponentPlaces] as const

    switch (piece.name) {
      case "Pawn":
        return new AvailablePlaceCalculatorForPawn(...argsOfAvailablePlacesCalculator)
      // TODO: 他の駒のロジックも実装する
      case "Luke":
        return new AvailablePlaceCalculatorForLuke(...argsOfAvailablePlacesCalculator)
      case "Bishop":
        return new AvailablePlaceCalculatorForBishop(...argsOfAvailablePlacesCalculator)
      default:
        throw new Error(`"${piece.name}"はAvailablePlaceCalculatorFactoryに登録されていません。`)
    }
  }
}
