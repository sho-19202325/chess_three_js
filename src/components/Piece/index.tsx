import { ThreeEvent, useFrame } from "@react-three/fiber";
import { calculatePositionFromPlace } from "common/utils";
import { FieldContext } from "contexts/FieldContext";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { PieceInfo, XyzSpace } from "types";
import { SIDE_LENGTH_OF_SQUARE } from "consts/chessBoard";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Luke } from "./Luke";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { movePiece } from "pages/chessField/actions";

type PieceProps = {
  piece: PieceInfo
  handleSelectPiece: (piece: PieceInfo) => void
}

export const Piece = ({ piece, handleSelectPiece }:PieceProps) => {
  const mesh = useRef<Mesh>(null)
  const position = calculatePositionFromPlace(piece.place)
  const { state, dispatch } = useContext(FieldContext)
  const [targetPosition, setTargetPosition] = useState<XyzSpace | null>(null)
  const [defFromTargetPosition, setDefFromTargetPosition] = useState<XyzSpace | null>(null)
  const MOVE_PER_DAY = 0.1

  const handleClickPiece = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    handleSelectPiece(piece)
  }

  const renderPiece = () => {
    switch (piece.name) {
      case "Pawn":
        return <Pawn />
      case "Luke":
        return <Luke />
      case "Knight":
        return <Knight />
      case "Bishop":
        return <Bishop />
      case "Queen":
        return <Queen />
      default:
        return <King />
    }
  }

  useEffect(() => {
    if (state.targetPlace === null || state.selectedPiece !== piece) {
      setTargetPosition(null)
      setDefFromTargetPosition(null)
    } else {
      const targetPosition = calculatePositionFromPlace(state.targetPlace)
      setTargetPosition(targetPosition)
      const distanceFromX = state.targetPlace[0] - piece.place[0]
      const distanceFromY = state.targetPlace[1] - piece.place[1]

      const position:XyzSpace = [distanceFromX * SIDE_LENGTH_OF_SQUARE, distanceFromY * SIDE_LENGTH_OF_SQUARE, 0]

      setDefFromTargetPosition(position)
    }
  }, [state.targetPlace])

  useFrame(() => {
    if (mesh.current === null
      || targetPosition === null
      || defFromTargetPosition === null
    ) return

    if (mesh.current.position.x !== targetPosition[0]) {
      const deltaX = defFromTargetPosition[0] > 0 ? MOVE_PER_DAY : -MOVE_PER_DAY
      mesh.current.position.x = Math.round((mesh.current.position.x + deltaX) * 100) / 100
    }

    if (mesh.current.position.y !== targetPosition[1]) {
      const deltaY = defFromTargetPosition[1] > 0 ? MOVE_PER_DAY : -MOVE_PER_DAY
      mesh.current.position.y = Math.round((mesh.current.position.y + deltaY) * 100) / 100
    }

    if (mesh.current.position.x === targetPosition[0]
      && mesh.current.position.y === targetPosition[1]
    ) {
      setTargetPosition(null)
      setDefFromTargetPosition(null)
      dispatch(movePiece(state))
    }
  })

  return (
    <Suspense fallback={null}>
      <mesh ref={mesh} position={position} onPointerDown={(e) => handleClickPiece(e)} >
        { renderPiece() }
      </mesh>
    </Suspense>
  )
}