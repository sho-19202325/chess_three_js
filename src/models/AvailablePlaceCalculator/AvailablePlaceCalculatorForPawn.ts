import { isIncludeSamePlace, isValidPlace } from "common/utils";
import { Place } from "types";
import { AvailablePlaceCalculator } from "models/AvailablePlaceCalculator";

export class AvailablePlaceCalculatorForPawn extends AvailablePlaceCalculator {
  START_PLACE_FOR_PLAYER_1 = 2
  START_PLACE_FOR_PLAYER_2 = 7
  START_PLACE_Y = this.player === 1 ? this.START_PLACE_FOR_PLAYER_1 : this.START_PLACE_FOR_PLAYER_2
  VECTOR_TO_MOVE = this.player === 1 ? 1 : -1

  run = () => {
    const availablePlaces:Place[] = []
    const unavailablePlaces = [...this.ownPlaces, ...this.opponentPlaces]

    let movablePlaceX = this.piece.place[0]
    let movablePlaceY = this.piece.place[1] + (1 * this.VECTOR_TO_MOVE)
    let movablePlace:Place = [movablePlaceX, movablePlaceY]

    if (!isIncludeSamePlace(movablePlace, unavailablePlaces)) {
      availablePlaces.push(movablePlace)

      // スタート位置の場合は2マス動ける
      if (this.piece.place[1] === this.START_PLACE_Y) {
        let movablePlaceX = this.piece.place[0]
        let movablePlaceY = this.piece.place[1] + (2 * this.VECTOR_TO_MOVE)
        let movablePlace:Place = [movablePlaceX, movablePlaceY]

        if (!isIncludeSamePlace(movablePlace, unavailablePlaces)) {
          availablePlaces.push([movablePlaceX, movablePlaceY])
        }
      }
    }

    // 敵のコマがあれば斜め前にも移動できる
    const diagonallyAvailablePlaces = this.getDiagonallyAvailablePlaces()
    diagonallyAvailablePlaces.forEach(place => availablePlaces.push(place))
    
    // 無効なPlaceを除外する
    availablePlaces.filter(place => isValidPlace(place))

    return availablePlaces
  }

  getDiagonallyAvailablePlaces = ():Place[] => {
    const diagnallyForwardPlaces:Place[] = [
      [this.piece.place[0] + (this.VECTOR_TO_MOVE * 1), this.piece.place[1] + (this.VECTOR_TO_MOVE * 1)],
      [this.piece.place[0] - (this.VECTOR_TO_MOVE * 1), this.piece.place[1] + (this.VECTOR_TO_MOVE * 1)]
    ]
    // 敵のコマが斜め前にあるPlaceのみ
    const diagonallyAvailablePlaces = diagnallyForwardPlaces
                               .filter(place => isIncludeSamePlace(place, this.opponentPlaces))

    return diagonallyAvailablePlaces
  }
}