import { ThreeEvent, useFrame } from "@react-three/fiber";
import { calculatePositionFromPlaceForPiece, isIncludeSamePlace } from "utils/place";
import { FieldContext } from "contexts/FieldContext";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { Group } from "three";
import { PieceInfo, Player, XyzSpace } from "types/common";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Luke } from "./Luke";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { movePiece, selectPiece, selectTargetPlace } from "pages/chessField/actions";
import { sumOfFloat } from "utils/floatCalculator";

type PieceProps = {
  piece: PieceInfo
  player: Player
}

// 駒を移動させる速度
const MOVE_PER_FRAME = 0.1

export const Piece = ({ piece, player }:PieceProps) => {
  const group = useRef<Group>(null)
  const position = calculatePositionFromPlaceForPiece(piece.place)

  const { state, dispatch } = useContext(FieldContext)
  const [targetPosition, setTargetPosition] = useState<XyzSpace | null>(null)

  const handleClickPiece = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()

    // SELECT_PIECE, SELECT_TARGET_PLACEフェーズ中に自分のコマをクリックしていればselectPieceアクションを実行
    if ((state.phase === "SELECT_PIECE" || state.phase === "SELECT_TARGET_PLACE") && state.currentPlayer === player) {
      dispatch(selectPiece(state, piece))
    // SELECT_TARGET_PLACEフェーズ中に移動できる範囲に置いてある敵のコマをクリックしていればselectTargetPlaceアクションを実行
    } else if (state.phase === "SELECT_TARGET_PLACE" && isIncludeSamePlace(piece.place, state.availablePlaces)) {
      dispatch(selectTargetPlace(state, piece.place))
    }
  }

  useEffect(() => {
    if (state.targetPlace === null) {
      setTargetPosition(null)
    } else if (state.selectedPiece === piece) {
      // 移動先のplaceから、positionを算出
      const targetPosition = calculatePositionFromPlaceForPiece(state.targetPlace)
      setTargetPosition(targetPosition)
    }
  }, [state, piece])

  const moveSelectedPiece = (group: Group) => {
    if (targetPosition === null || state.phase !== "MOVE_PIECE") return

    const distanceXToTarget = targetPosition[0] - group.position.x
    const distanceYToTarget = targetPosition[1] - group.position.y

    if (distanceXToTarget !== 0) {
      const deltaX =  distanceXToTarget > 0 ? MOVE_PER_FRAME : -MOVE_PER_FRAME
      group.position.x = sumOfFloat(group.position.x, deltaX)
    }

    if (distanceYToTarget !== 0) {
      const deltaY = distanceYToTarget > 0 ? MOVE_PER_FRAME : -MOVE_PER_FRAME
      group.position.y = sumOfFloat(group.position.y, deltaY)
    }

    // 目的のpositionまで到達した時に、各stateをnullに戻し、movePieceアクションをdispathする。
    if (distanceXToTarget === 0 && distanceYToTarget === 0) {
      setTargetPosition(null)
      dispatch(movePiece(state))
    }
  }

  useFrame(() => {
    if (group.current === null) return

    moveSelectedPiece(group.current)
  })

  const renderPiece = () => {
    switch (piece.name) {
      case "Pawn":
        return <Pawn player={player} />
      case "Luke":
        return <Luke player={player} />
      case "Knight":
        return <Knight player={player} />
      case "Bishop":
        return <Bishop player={player} />
      case "Queen":
        return <Queen player={player} />
      default:
        return <King player={player} />
    }
  }

  return (
    <Suspense fallback={null}>
      <group ref={group} position={position} onPointerDown={(e) => handleClickPiece(e)} >
        { renderPiece() }
      </group>
    </Suspense>
  )
}