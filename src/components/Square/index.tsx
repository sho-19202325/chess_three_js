import { Suspense } from "react"
import { XyzSpace } from "../../common/types"

type SquareProps = Readonly<{
  position: XyzSpace
  isBlack: boolean
}>

const SQUARE_SIZE:[number, number] = [1, 1]

export const Square = ({ position, isBlack }: SquareProps) => {
  const squareColor = isBlack ? '#000' : '#fff'

  return (
    <Suspense fallback={null}>
        <mesh position={position}>
          <planeGeometry args={SQUARE_SIZE}  />
          <meshStandardMaterial color={squareColor} />
        </mesh>
    </Suspense>
  )
}
