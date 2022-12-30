import { Place } from "types/common";
import { isIncludeSamePlace, isValidPlace } from "utils/place";
import { AvailablePlaceCalculator } from "models/AvailablePlaceCalculator";

export class AvailablePlaceCalculatorForKnight extends AvailablePlaceCalculator {
  run = () => {
    const availablePlaces:Place[] = []

    const movablePlaces:Place[] = [
      [this.piece.place[0] + 2, this.piece.place[1] + 1],
      [this.piece.place[0] + 2, this.piece.place[1] - 1],
      [this.piece.place[0] - 2, this.piece.place[1] + 1],
      [this.piece.place[0] - 2, this.piece.place[1] - 1],
      [this.piece.place[0] + 1 , this.piece.place[1] + 2],
      [this.piece.place[0] - 1, this.piece.place[1] + 2],
      [this.piece.place[0] + 1 , this.piece.place[1] - 2],
      [this.piece.place[0] - 1, this.piece.place[1] - 2],
    ]

    movablePlaces.forEach(place => {
      if (isValidPlace(place) && !isIncludeSamePlace(place, this.ownPlaces)) availablePlaces.push(place)
    })

    return availablePlaces
  }
}