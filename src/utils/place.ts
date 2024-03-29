import { HORIZONTAL_SQUARE_COUNT, PIECE_Z_POSITION, SIDE_LENGTH_OF_SQUARE, VIRTICAL_SQUARE_COUNT } from "consts/chessBoard"
import { Place, XyzSpace } from "../types/common"

const calculatePositionFromPlace = (place: Place) => {
  // 中心から何マス離れているかの計算
  const diffHorizontalSquareCountFromCenter = place[0] - (HORIZONTAL_SQUARE_COUNT + 1) / 2
  const diffVirticalSquareCountFromCenter = place[1] - (VIRTICAL_SQUARE_COUNT + 1) / 2

  const positionX = (diffHorizontalSquareCountFromCenter) * SIDE_LENGTH_OF_SQUARE
  const positionY = (diffVirticalSquareCountFromCenter) * SIDE_LENGTH_OF_SQUARE
  
  return [positionX, positionY, 0] as XyzSpace
}

const calculatePositionFromPlaceForPiece = (place: Place) => {
  const position = calculatePositionFromPlace(place)
  return [position[0], position[1], PIECE_Z_POSITION] as XyzSpace
}

// 配列を直接比較すると常にfalseとなるので、toString()して比較している
const isSamePlace = (placeA: Place , placeB: Place) => {
  return placeA.toString() === placeB.toString()
}

const isIncludeSamePlace = (targetPlace: Place, basePlace: Place[]) => {
  return basePlace.some(place => isSamePlace(place, targetPlace))
}

const isValidPlace = (place: Place) => {
  return place[0] > 0
         && place[0] < HORIZONTAL_SQUARE_COUNT
         && place[1] > 0
         && place[1] < VIRTICAL_SQUARE_COUNT
}

export {
  calculatePositionFromPlace,
  calculatePositionFromPlaceForPiece,
  isSamePlace,
  isIncludeSamePlace,
  isValidPlace
}
