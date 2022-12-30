type XyzSpace = [number, number, number]
// TODO: 1~8までのみを許容するように変更する
type Place = [number, number]

type PieceName = "Pawn" | "Luke" | "Bishop" | "Knight" | "Queen" | "King"
type PromotionPieceName = Extract<PieceName, "Luke" | "Bishop" | "Knight" | "Queen">
type PieceInfo = {
  name: PieceName,
  place: Place
}

type Player = 1 | 2
type Phase = "SELECT_PIECE" | "SELECT_TARGET_PLACE" | "MOVE_PIECE" | "FINISH_TURN"

export type {
  XyzSpace,
  Place,
  PieceName,
  PromotionPieceName,
  PieceInfo,
  Player,
  Phase,
}
