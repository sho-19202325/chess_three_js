type XyzSpace = [number, number, number]
// TODO: 1~8までのみを許容するように変更する
type Place = [number, number]

type PieceName = "Pawn" | "Luke" | "Bishop" | "Knight" | "Queen" | "King"
type PieceInfo = {
  name: PieceName,
  place: Place
}

type Player = 1 | 2
type Phase = "SELECT_PIECE" | "SELECT_SQUARE" | "MOVE_PIECE" | "FINISH_TURN"

export type {
  XyzSpace,
  Place,
  PieceName,
  PieceInfo,
  Player,
  Phase,
}
