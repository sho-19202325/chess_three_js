import { HORIZONTAL_SQUARE_COUNT, SIDE_LENGTH_OF_SQUARE, VIRTICAL_SQUARE_COUNT } from "./constants"
import { Place, XyzSpace } from "./types"

const calculatePositionFromPlace = (place: Place) => {
  // 中心から何マス離れているかの計算
  const diffHorizontalSquareCountFromCenter = place[0] - (HORIZONTAL_SQUARE_COUNT + 1) / 2
  const diffVirticalSquareCountFromCenter = place[1] - (VIRTICAL_SQUARE_COUNT + 1) / 2

  const positionX = (diffHorizontalSquareCountFromCenter) * SIDE_LENGTH_OF_SQUARE
  const positionY = (diffVirticalSquareCountFromCenter) * SIDE_LENGTH_OF_SQUARE
  
  return [positionX, positionY, 0] as XyzSpace
}

export {
  calculatePositionFromPlace
}
