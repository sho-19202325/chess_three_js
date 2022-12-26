import { Place } from "types/common";
import { isIncludeSamePlace } from "utils/place";
import { AvailablePlaceCalculator } from "models/AvailablePlaceCalculator";

export class AvailablePlaceCalculatorForKing extends AvailablePlaceCalculator {
  run = () => {
    const availablePlaces:Place[] = []

    const movablePlaces:Place[] = [
      [this.piece.place[0], this.piece.place[1] + 1],
      [this.piece.place[0] + 1, this.piece.place[1] + 1],
      [this.piece.place[0] - 1, this.piece.place[1] + 1],
      [this.piece.place[0] + 1, this.piece.place[1]],
      [this.piece.place[0] - 1, this.piece.place[1]],
      [this.piece.place[0], this.piece.place[1] - 1],
      [this.piece.place[0] + 1, this.piece.place[1] - 1],
      [this.piece.place[0] - 1, this.piece.place[1] - 1]
    ]

    movablePlaces.forEach(place => {
      if (!isIncludeSamePlace(place, this.ownPlaces)) availablePlaces.push(place)
    })

    return availablePlaces
  }
}
