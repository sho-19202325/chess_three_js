import { Place } from "types/common";
import { isIncludeSamePlace, isValidPlace } from "utils/place";
import { AvailablePlaceCalculator } from "models/AvailablePlaceCalculator";

export class AvailablePlaceCalculatorForPawn extends AvailablePlaceCalculator {
  START_PLACE_FOR_PLAYER_1 = 2
  START_PLACE_FOR_PLAYER_2 = 7
  START_PLACE_Y = this.player === 1 ? this.START_PLACE_FOR_PLAYER_1 : this.START_PLACE_FOR_PLAYER_2
  VECTOR_TO_MOVE = this.player === 1 ? 1 : -1

  run = () => {
    const availablePlaces:Place[] = []
    const unavailablePlaces = [...this.ownPlaces, ...this.opponentPlaces]

    let movablePlaceInFront:Place = [this.piece.place[0], this.piece.place[1] + (1 * this.VECTOR_TO_MOVE)]
    if (!isIncludeSamePlace(movablePlaceInFront, unavailablePlaces)) {
      availablePlaces.push(movablePlaceInFront)

      // スタート時は2マス動ける
      if (this.piece.place[1] === this.START_PLACE_Y) {
        movablePlaceInFront = [this.piece.place[0], this.piece.place[1] + (2 * this.VECTOR_TO_MOVE)]
        if (!isIncludeSamePlace(movablePlaceInFront, unavailablePlaces)) availablePlaces.push(movablePlaceInFront)
      }
    }

    // 敵のコマがあれば斜め前にも移動できる
    const movablePlacesInDiagonallyFront:Place[] = [
      [this.piece.place[0] + (this.VECTOR_TO_MOVE * 1), this.piece.place[1] + (this.VECTOR_TO_MOVE * 1)],
      [this.piece.place[0] - (this.VECTOR_TO_MOVE * 1), this.piece.place[1] + (this.VECTOR_TO_MOVE * 1)]
    ]

    movablePlacesInDiagonallyFront.forEach(place => {
      if (isIncludeSamePlace(place, this.opponentPlaces)) availablePlaces.push(place)
    })
    
    // 無効なPlaceを除外する
    availablePlaces.filter(place => isValidPlace(place))

    return availablePlaces
  }
}