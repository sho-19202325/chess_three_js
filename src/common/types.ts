type XyzSpace = [number, number, number]
// TODO: 1~8までのみを許容するように変更する
type Place = [number, number]

type PieceName = "Pawn" | "Luke" | "Bishop" | "Knight" | "Queen" | "King"
type PieceInfo = {
  name: PieceName,
  place: Place
}

type PlayerPieces = {
  player1: PieceInfo[]
  player2: PieceInfo[]
}

type Phase = "SELECT_PIECE" | "SELECT_SQUARE" | "MOVE_PIECE" | "FINISH_TURN"

type FieldState = {
  phase: Phase
  currentPlayer: 1 | 2
  selectedPiece: PieceInfo | null
  targetPlace: Place | null
  playerPieces: PlayerPieces
  availablePlaces: Place[] | null
}

type FieldAction = {
  type: Phase
  payload: FieldState
}

export type {
  XyzSpace,
  Place,
  PieceInfo,
  FieldState,
  FieldAction
}
