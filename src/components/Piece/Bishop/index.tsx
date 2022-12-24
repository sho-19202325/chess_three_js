import { BOX_PIECE_ARGS, CYLINHDER_PIECE_ARGS, CYLINHDER_PIECE_ROTATION } from "consts/chessBoard"
import { Player } from "types/common"

const BISHOP_COLOR = 'green'

export const Bishop = ({ player }:{ player: Player }) => {
  return (
    <>
      { player === 1 ? (
        <mesh>
          <boxGeometry args={BOX_PIECE_ARGS} />
          <meshStandardMaterial color={BISHOP_COLOR} />
        </mesh>
      ) : (
        <mesh rotation={CYLINHDER_PIECE_ROTATION}>
          <cylinderGeometry args={CYLINHDER_PIECE_ARGS} />
          <meshStandardMaterial color={BISHOP_COLOR} />
        </mesh>
      ) }
    </>
  )
}
