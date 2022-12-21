import { TEMP_PIECE_SIZE } from "consts/chessBoard"

// NOTE: 3dモデルを別で作って読み込む想定だが、現状は色の違いのみでコマを表現する
const BISHOP_COLOR = 'green'

export const Bishop = () => {
  return (
    <>
      <boxGeometry args={TEMP_PIECE_SIZE} />
      <meshStandardMaterial color={BISHOP_COLOR} />
    </>
  )
}
