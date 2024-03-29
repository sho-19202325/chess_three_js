import { ThreeEvent, useFrame } from "@react-three/fiber"
import { calculatePositionFromPlace } from "utils/place"
import { FieldContext } from "contexts/FieldContext"
import { selectTargetPlace } from "pages/chessField/actions"
import { Suspense, useContext, useEffect, useRef } from "react"
import { MeshStandardMaterial } from "three"
import { Place } from "../../types/common"

type SquareProps = Readonly<{
  place: Place
  isBlack: boolean
  isActive?: boolean
}>

const SQUARE_SIZE:[number, number] = [1, 1]
const MAX_RGB = 1
const DELTA_RGB = 0.01

export const Square = ({ place, isBlack, isActive }: SquareProps) => {
  let squareColor = isBlack && !isActive ? '#000' : '#fff'
  const material = useRef<MeshStandardMaterial>(null)
  const position = calculatePositionFromPlace(place)
  const { state, dispatch } = useContext(FieldContext)

  const flashActiveSquare = () => {
    if (material.current === null || !isActive) return

    if (material.current.color.g <= 0 && material.current.color.b <= 0) {
      material.current.color.g = MAX_RGB
      material.current.color.b = MAX_RGB
    } else {
      material.current.color.g -= DELTA_RGB
      material.current.color.b -= DELTA_RGB
    }
  }

  const handleClickActiveSqure = (e: ThreeEvent<PointerEvent>) => {
    if (!isActive || state.phase !== "SELECT_TARGET_PLACE") return
    e.stopPropagation()

    dispatch(selectTargetPlace(state, place))
  }

  useEffect(() => {
    // アクティブでなくなった時にcolorを元に戻す
    if (!isActive && material.current !== null) {
      material.current.color.set(squareColor)
    }
  }, [isActive, squareColor])

  useFrame(() => {
    flashActiveSquare()
  })

  return (
    <Suspense fallback={null}>
        <mesh position={position} onPointerDown={(e) => handleClickActiveSqure(e)}>
          <planeGeometry args={SQUARE_SIZE}  />
          <meshStandardMaterial ref={material} color={squareColor} />
        </mesh>
    </Suspense>
  )
}
