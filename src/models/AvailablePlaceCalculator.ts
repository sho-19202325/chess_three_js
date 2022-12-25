import { HORIZONTAL_SQUARE_COUNT, VIRTICAL_SQUARE_COUNT } from "consts/chessBoard"
import {  PieceInfo, Place, Player } from "types/common"
import { isIncludeSamePlace } from "utils/place"

export abstract class AvailablePlaceCalculator {
  piece: PieceInfo
  player: Player
  ownPlaces: Place[]
  opponentPlaces: Place[]

  constructor (piece: PieceInfo, player: Player, ownPlaces: Place[], opponentPlaces: Place[]) {
    this.piece = piece
    this.player = player
    this.ownPlaces = ownPlaces
    this.opponentPlaces = opponentPlaces
  }

  abstract run: () => Place[]

  protected findAvailablePlacesInFront = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let placeY = fromPlace[1] + 1; placeY <= VIRTICAL_SQUARE_COUNT; placeY++) {
      const targetPlace:Place = [fromPlace[0], placeY]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }

  protected findAvailablePlacesInBack = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let placeY = fromPlace[1] - 1; placeY >= 0; placeY--) {
      const targetPlace:Place = [fromPlace[0], placeY]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }

  protected findAvailablePlacesInRight = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let placeX = fromPlace[0] + 1; placeX <= HORIZONTAL_SQUARE_COUNT; placeX++) {
      const targetPlace:Place = [placeX, fromPlace[1]]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }

  protected findAvailablePlacesInLeft = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let placeX = fromPlace[0] - 1; placeX >= 0; placeX--) {
      const targetPlace:Place = [placeX, fromPlace[1]]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }

  protected findAvailablePlaceInRightFront = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let distance = 1;; distance++) {
      const placeX = fromPlace[0] + distance
      const placeY = fromPlace[1] + distance
      if (placeX > HORIZONTAL_SQUARE_COUNT || placeY > VIRTICAL_SQUARE_COUNT) break

      const targetPlace:Place = [placeX, placeY]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }

  protected findAvailablePlaceInLeftFront = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let distance = 1;; distance++) {
      const placeX = fromPlace[0] - distance
      const placeY = fromPlace[1] + distance
      if (placeX < 0 || placeY > VIRTICAL_SQUARE_COUNT) break

      const targetPlace:Place = [placeX, placeY]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }

  protected findAvailablePlaceInRightBack = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let distance = 1;; distance++) {
      const placeX = fromPlace[0] + distance
      const placeY = fromPlace[1] - distance
      if (placeX > HORIZONTAL_SQUARE_COUNT || placeY < 0) break

      const targetPlace:Place = [placeX, placeY]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }

  protected findAvailablePlaceInLeftBack = (fromPlace: Place) => {
    const availablePlaces:Place[] = []

    for (let distance = 1;; distance++) {
      const placeX = fromPlace[0] - distance
      const placeY = fromPlace[1] - distance
      if (placeX < 0 || placeY < 0) break

      const targetPlace:Place = [placeX, placeY]

      if (isIncludeSamePlace(targetPlace, this.ownPlaces)) return availablePlaces

      availablePlaces.push(targetPlace)

      if (isIncludeSamePlace(targetPlace, this.opponentPlaces)) return availablePlaces
    }

    return availablePlaces
  }
}