import {  PieceInfo, Place, Player } from "types"

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
}