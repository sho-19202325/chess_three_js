import { PieceInfo, Place, Player, PromotionPieceName } from "types/common";
import { FieldAction, FieldState, PlayerPieces } from "types/fieldState";
import { AvailablePlaceCalculatorFactory } from "models/AvailablePlaceCalculatorFactory";
import { isSamePlace } from "utils/place";

const selectPiece = (state: FieldState, selectedPiece: PieceInfo):FieldAction => {
  if (state.phase !== "SELECT_PIECE" && state.phase !== "SELECT_TARGET_PLACE") throw Error(`Invalid Phase is specified: ${state.phase}, but expected SELECT_PIECE`)

  const ownPlaces = state.playerPieces[state.currentPlayer].map(piece => piece.place)
  const opponentPlaces = state.playerPieces[state.opponentPlayer].map(piece => piece.place)

  // 移動可能なマスを取得する
  const availablePlaceCalculator = AvailablePlaceCalculatorFactory.create(
    selectedPiece,
    state.currentPlayer,
    ownPlaces,
    opponentPlaces
  )
  const availablePlaces = availablePlaceCalculator.run()

  return {
    type: "SELECT_PIECE",
    payload: {
      ...state,
      phase: "SELECT_TARGET_PLACE",
      selectedPiece,
      availablePlaces
    }
  }
}

const selectTargetPlace = (state: FieldState, targetPlace: Place):FieldAction => {
  if (state.phase !== "SELECT_TARGET_PLACE") throw Error(`Invalid Phase is specified: ${state.phase}, but expected SELECT_TARGET_PLACE`)

  let opponentPieces = state.playerPieces[state.opponentPlayer] 
  let winner = null

  const targetPiece = opponentPieces.find(piece => isSamePlace(targetPlace, piece.place))

  if (targetPiece) {
    // targetPlaceに置枯れている駒を削除する
    opponentPieces = opponentPieces.filter(piece => JSON.stringify(piece) !== JSON.stringify(targetPiece))

    // targetPieceが"King"であれば、currentPlayerをwinnerとする
    if (targetPiece.name === "King") winner = state.currentPlayer
  }

  const playerPieces = buildPlayerPieces(
    state.currentPlayer,
    state.playerPieces[state.currentPlayer],
    opponentPieces
  )

  return {
    type: "SELECT_TARGET_PLACE",
    payload: {
      ...state,
      phase: "MOVE_PIECE",
      targetPlace,
      playerPieces,
      winner
    }
  }
}

const movePiece = (state: FieldState):FieldAction => {
  if (state.phase !== "MOVE_PIECE") throw Error(`Invalid Phase is specified: ${state.phase}, but expected MOVE_PIECE`)

  return {
    type: "MOVE_PIECE",
    payload: {
      ...state,
      phase: "FINISH_TURN"
    }
  }
}

const finishTurn = (state: FieldState, promotionPieceName?: PromotionPieceName):FieldAction => {
  if (state.phase !== "FINISH_TURN") throw Error(`Invalid Phase is specified: ${state.phase}, but expected FINISH_TURN`)

  // 移動させたpieceをアップデートする
  const ownPieces = state.playerPieces[state.currentPlayer]
  const newPieceName = promotionPieceName !== undefined ? promotionPieceName : state.selectedPiece.name
  const newPiece = {
    name: newPieceName,
    place: state.targetPlace
  }
  const selectedPieceIndex = ownPieces.findIndex(piece => JSON.stringify(piece) === JSON.stringify(state.selectedPiece))
  ownPieces[selectedPieceIndex] = newPiece

  const playerPieces = buildPlayerPieces(
    state.currentPlayer,
    ownPieces,
    state.playerPieces[state.opponentPlayer]
  )

  const nextPlayer = state.currentPlayer === 1 ? 2 : 1
  return {
    type: "FINISH_TURN",
    payload: {
      ...state,
      playerPieces,
      phase: "SELECT_PIECE",
      currentPlayer: nextPlayer,
      opponentPlayer: state.currentPlayer,
      selectedPiece: null,
      targetPlace: null,
      availablePlaces: null
    }
  }
}

const buildPlayerPieces = (currentPlayer: Player, ownPieces: PieceInfo[], opponentPieces: PieceInfo[]) => {
  let playerPieces:PlayerPieces = { 1: [], 2: []}

  if (currentPlayer === 1) {
    playerPieces = {
      1: ownPieces,
      2: opponentPieces
    }
  } else {
    playerPieces = {
      1: opponentPieces,
      2: ownPieces
    }
  }

  return playerPieces
}

export {
  selectPiece,
  selectTargetPlace,
  movePiece,
  finishTurn
}
