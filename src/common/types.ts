type XyzSpace = [number, number, number]
// TODO: 1~8までのみを許容するように変更する
type Place = [number, number]

type PieceName = "Pawn" | "Luke" | "Bishop" | "Knight" | "Queen" | "King"
type PieceProps = {
  name: PieceName,
  place: Place
}

export type {
  XyzSpace,
  Place,
  PieceProps
}
