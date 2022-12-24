import { ThreeEvent, useFrame } from "@react-three/fiber";
import { calculatePositionFromPlace, isSamePlace } from "utils/place";
import { FieldContext } from "contexts/FieldContext";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { PieceInfo, XyzSpace } from "types/common";
import { MAX_Z_POSITION, SIDE_LENGTH_OF_SQUARE } from "consts/chessBoard";
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

// 駒を移動させる速度
const MOVE_PER_FRAME = 0.1

// 取られた駒が除外される速度
const REMOVE_PER_FRAME = 1

export const Piece = ({ piece, handleSelectPiece }:PieceProps) => {
  const mesh = useRef<Mesh>(null)
  const position = calculatePositionFromPlace(piece.place)
  const { state, dispatch } = useContext(FieldContext)
  const [targetPosition, setTargetPosition] = useState<XyzSpace | null>(null)
  const [defFromTargetPosition, setDefFromTargetPosition] = useState<XyzSpace | null>(null)
  // 駒が取られたかどうかを判別するためのstate
  const [isRemoved, setIsRemoved] = useState<boolean>(false)

  const REMOVE_DERECTION = position[1] > 0 ? 1 : -1

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
    if (state.targetPlace === null) {
      setTargetPosition(null)
      setDefFromTargetPosition(null)
    } else {
      if (state.selectedPiece === piece) {
        // 移動先のplaceから、positionを算出
        const targetPosition = calculatePositionFromPlace(state.targetPlace)
        setTargetPosition(targetPosition)

        // 移動先のpositionと動かすコマの距離を算出
        const distanceFromX = state.targetPlace[0] - piece.place[0]
        const distanceFromY = state.targetPlace[1] - piece.place[1]
        const position:XyzSpace = [distanceFromX * SIDE_LENGTH_OF_SQUARE, distanceFromY * SIDE_LENGTH_OF_SQUARE, 0]
        setDefFromTargetPosition(position)
      } else if (isSamePlace(state.targetPlace, piece.place)) {
        // 移動先のplaceにコマがあったら、駒を削除する
        if (state.phase === "MOVE_PIECE") setIsRemoved(true)
      }
    }
  }, [state, piece])

  const moveSelectedPiece = (mesh: Mesh) => {
    if (targetPosition === null || defFromTargetPosition === null || state.phase !== "MOVE_PIECE") return

    if (mesh.position.x !== targetPosition[0]) {
      const deltaX = defFromTargetPosition[0] > 0 ? MOVE_PER_FRAME : -MOVE_PER_FRAME
      mesh.position.x = Math.round((mesh.position.x + deltaX) * 100) / 100
    }

    if (mesh.position.y !== targetPosition[1]) {
      const deltaY = defFromTargetPosition[1] > 0 ? MOVE_PER_FRAME : -MOVE_PER_FRAME
      mesh.position.y = Math.round((mesh.position.y + deltaY) * 100) / 100
    }

    // 目的のpositionまで到達した時に、各stateをnullに戻し、movePieceアクションをdispathする。
    if (mesh.position.x === targetPosition[0]
      && mesh.position.y === targetPosition[1]
    ) {
      setTargetPosition(null)
      setDefFromTargetPosition(null)
      dispatch(movePiece(state))
    }
  }

  const moveLostPiece = (mesh: Mesh) => {
    if (isRemoved) {
      if (mesh.position.z < MAX_Z_POSITION) {
        mesh.position.z += REMOVE_PER_FRAME
        mesh.position.y += REMOVE_PER_FRAME * REMOVE_DERECTION
      } else {
        setIsRemoved(false)
      }
    }
  }

  useFrame(() => {
    if (mesh.current === null) return

    moveSelectedPiece(mesh.current)
    moveLostPiece(mesh.current)
  })

  return (
    <Suspense fallback={null}>
      <mesh ref={mesh} position={position} onPointerDown={(e) => handleClickPiece(e)} >
        { renderPiece() }
      </mesh>
    </Suspense>
  )
}