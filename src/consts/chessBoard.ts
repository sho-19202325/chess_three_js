import { Place, XyzSpace } from "types/common"

const MAX_Z_POSITION = 10
const PIECE_HEIGHT = 1
const BOX_PIECE_ARGS = [0.5, 0.5, PIECE_HEIGHT] as XyzSpace
const CYLINHDER_PIECE_ARGS = [0.3, 0.3, PIECE_HEIGHT, 32] as [number, number, number, number]
const CYLINHDER_PIECE_ROTATION = [Math.PI / 2, 0, 0] as XyzSpace

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
  MAX_Z_POSITION,
  PIECE_HEIGHT,
  BOX_PIECE_ARGS,
  CYLINHDER_PIECE_ARGS,
  CYLINHDER_PIECE_ROTATION,
  VIRTICAL_SQUARE_COUNT,
  HORIZONTAL_SQUARE_COUNT,
  SIDE_LENGTH_OF_SQUARE,
  ALL_PLACES
}
