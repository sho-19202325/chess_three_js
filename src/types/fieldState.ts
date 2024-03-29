import { PieceInfo, Place, Player } from "./common"

type PlayerPieces = {
  1: PieceInfo[]
  2: PieceInfo[]
}

type FieldState = SelectPieceState | SelectTargetPlaceState | MoveOrFinishState

type SelectPieceState = {
  phase:"SELECT_PIECE"
  currentPlayer: Player
  opponentPlayer: Player
  selectedPiece: null
  targetPlace: null
  playerPieces: PlayerPieces
  availablePlaces: null
  winner: Player | null
}

type SelectTargetPlaceState = {
  phase: "SELECT_TARGET_PLACE"
  currentPlayer: Player
  opponentPlayer: Player
  selectedPiece: PieceInfo
  targetPlace: null
  playerPieces: PlayerPieces
  availablePlaces: Place[]
  winner: Player | null
}

type MoveOrFinishState = {
  phase: "MOVE_PIECE" | "FINISH_TURN"
  currentPlayer: Player
  opponentPlayer: Player
  selectedPiece: PieceInfo
  targetPlace: Place
  playerPieces: PlayerPieces
  availablePlaces: Place[]
  winner: Player | null
}

type SelectPieceAction = {
  type: "SELECT_PIECE",
  payload: SelectTargetPlaceState
}

type SelectTargetPlaceAction = {
  type: "SELECT_TARGET_PLACE",
  payload: MoveOrFinishState
}

type MoveAction = {
  type: "MOVE_PIECE",
  payload: MoveOrFinishState
}

type FinishTurnAction = {
  type: "FINISH_TURN",
  payload: SelectPieceState
}

type FieldAction = SelectPieceAction | SelectTargetPlaceAction | MoveAction | FinishTurnAction

export type {
  FieldState,
  FieldAction,
  PlayerPieces,
  SelectPieceState
}