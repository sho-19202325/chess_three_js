type XyzSpace = [number, number, number]
// TODO: 1~8までのみを許容するように変更する
type Place = [number, number]

type PieceName = "Pawn" | "Luke" | "Bishop" | "Knight" | "Queen" | "King"
type PieceInfo = {
  name: PieceName,
  place: Place
}

type Player = 1 | 2
type PlayerPieces = {
  1: PieceInfo[]
  2: PieceInfo[]
}

type Phase = "SELECT_PIECE" | "SELECT_SQUARE" | "MOVE_PIECE" | "FINISH_TURN"

type FieldState = SelectPieceState | SelectSquareState | MoveOrFinishState

type SelectPieceState = {
  phase:"SELECT_PIECE"
  currentPlayer: Player
  opponentPlayer: Player
  selectedPiece: null
  targetPlace: null
  playerPieces: PlayerPieces
  availablePlaces: null
}

type SelectSquareState = {
  phase: "SELECT_SQUARE"
  currentPlayer: Player
  opponentPlayer: Player
  selectedPiece: PieceInfo
  targetPlace: null
  playerPieces: PlayerPieces
  availablePlaces: Place[]
}

type MoveOrFinishState = {
  phase: "MOVE_PIECE" | "FINISH_TURN"
  currentPlayer: Player
  opponentPlayer: Player
  selectedPiece: PieceInfo
  targetPlace: Place
  playerPieces: PlayerPieces
  availablePlaces: Place[]
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
  XyzSpace,
  Place,
  PieceName,
  PieceInfo,
  Player,
  PlayerPieces,
  Phase,
  FieldState,
  FieldAction
}
