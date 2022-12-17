import { TEMP_PIECE_SIZE } from "common/constants"

// NOTE: 3dモデルを別で作って読み込む想定だが、現状は色の違いのみでコマを表現する
const LUKE_COLOR = 'blue'

export const Luke = () => {
  return (
    <>
      <boxGeometry args={TEMP_PIECE_SIZE} />
      <meshStandardMaterial color={LUKE_COLOR} />
    </>
  )
}
