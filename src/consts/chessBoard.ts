import { Place, XyzSpace } from "types/common"

// NOTE: 3dモデルを読み込むまではサイズを統一している
const TEMP_PIECE_SIZE = [0.5, 0.5, 2] as XyzSpace

const VIRTICAL_SQUARE_COUNT = 8
const HORIZONTAL_SQUARE_COUNT = 8
const SIDE_LENGTH_OF_SQUARE = 1

const getAllPlaces = ():Place[] => {
  const allPlaces = []
  for (let column = 1; column <= VIRTICAL_SQUARE_COUNT; column++) {
    for (let row = 1; row <= HORIZONTAL_SQUARE_COUNT; row++) {
      const place:Place = [column, row]
      allPlaces.push(place)
    }
  }

  return allPlaces
}

const ALL_PLACES = getAllPlaces()

export {
  TEMP_PIECE_SIZE,
  VIRTICAL_SQUARE_COUNT,
  HORIZONTAL_SQUARE_COUNT,
  SIDE_LENGTH_OF_SQUARE,
  ALL_PLACES
}
