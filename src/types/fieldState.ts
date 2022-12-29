import { PieceInfo, Place, Player } from "./common"

type PlayerPieces = {
  1: PieceInfo[]
  2: PieceInfo[]
}

type FieldState = SelectPieceState | SelectSquareState | MoveOrFinishState

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

type SelectSquareState = {
  phase: "SELECT_SQUARE"
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
  payload: SelectSquareState
}

type SelectSquareAction = {
  type: "SELECT_SQUARE",
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

type FieldAction = SelectPieceAction | SelectSquareAction | MoveAction | FinishTurnAction

export type {
  FieldState,
  FieldAction,
  PlayerPieces,
  SelectPieceState
}