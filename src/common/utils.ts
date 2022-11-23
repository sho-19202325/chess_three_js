import { HORIZONTAL_SQUARE_COUNT, SIDE_LENGTH_OF_SQUARE, VIRTICAL_SQUARE_COUNT } from "./constants"
import { XyzSpace } from "./types"

// TODO: 1~8までのみを許容するように変更する
type SquarePosition = [number, number]
const caluculatePosition = (squarePosition: SquarePosition) => {
  // 中心から何マス離れているかの計算
  const diffHorizontalSquareCountFromCenter = squarePosition[0] - (HORIZONTAL_SQUARE_COUNT + 1) / 2
  const diffVirticalSquareCountFromCenter = squarePosition[1] - (VIRTICAL_SQUARE_COUNT + 1) / 2

  const positionX = (diffHorizontalSquareCountFromCenter) * SIDE_LENGTH_OF_SQUARE
  const positionY = (diffVirticalSquareCountFromCenter) * SIDE_LENGTH_OF_SQUARE
  
  return [positionX, positionY, 0] as XyzSpace
}

export {
  caluculatePosition
}
