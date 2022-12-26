import { PieceInfo, Place, Player } from "types/common"
import { AvailablePlaceCalculatorForBishop } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForBishop"
import { AvailablePlaceCalculatorForKing } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForKing"
import { AvailablePlaceCalculatorForKnight } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForKnight"
import { AvailablePlaceCalculatorForLuke } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForLuke"
import { AvailablePlaceCalculatorForPawn } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForPawn"
import { AvailablePlaceCalculatorForQueen } from "./AvailablePlaceCalculator/AvailablePlaceCalculatorForQueen"

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
      case "Luke":
        return new AvailablePlaceCalculatorForLuke(...argsOfAvailablePlacesCalculator)
      case "Bishop":
        return new AvailablePlaceCalculatorForBishop(...argsOfAvailablePlacesCalculator)
      case "Queen":
        return new AvailablePlaceCalculatorForQueen(...argsOfAvailablePlacesCalculator)
      case "Knight":
        return new AvailablePlaceCalculatorForKnight(...argsOfAvailablePlacesCalculator)
      case "King":
        return new AvailablePlaceCalculatorForKing(...argsOfAvailablePlacesCalculator)
      default:
        throw new Error(`"${piece.name}"はAvailablePlaceCalculatorFactoryに登録されていません。`)
    }
  }
}
