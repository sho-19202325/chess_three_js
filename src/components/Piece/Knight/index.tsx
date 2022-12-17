import { Suspense } from "react"
import { TEMP_PIECE_SIZE } from "common/constants"
import { Place } from "common/types"
import { calculatePositionFromPlace } from "common/utils"

// NOTE: 3dモデルを別で作って読み込む想定だが、現状は色の違いのみでコマを表現する
const KNIGHT_COLOR = 'yellow'

export const Knight = ({ place }:{ place: Place }) => {
  const position = calculatePositionFromPlace(place)

  return (
    <Suspense fallback={null}>
      <mesh position={position}>
        <boxGeometry args={TEMP_PIECE_SIZE} />
        <meshStandardMaterial color={KNIGHT_COLOR} />
      </mesh>
    </Suspense>
  )
}
