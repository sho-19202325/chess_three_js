import { FieldAction, FieldState, PieceInfo, Place, PlayerPieces } from "common/types";
import { AvailablePlaceCalculatorFactory } from "models/AvailablePlaceCalculatorFactory";

const selectPiece = (state: FieldState, selectedPiece: PieceInfo):FieldAction => {
  if (state.phase !== "SELECT_PIECE" && state.phase !== "SELECT_SQUARE") throw Error(`Invalid Phase is specified: ${state.phase}, but expected SELECT_PIECE`)

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
      phase: "SELECT_SQUARE",
      selectedPiece,
      availablePlaces
    }
  }
}

const selectSquare = (state: FieldState, targetPlace: Place):FieldAction => {
  if (state.phase !== "SELECT_SQUARE") throw Error(`Invalid Phase is specified: ${state.phase}, but expected SELECT_SQUARE`)

  return {
    type: "SELECT_SQUARE",
    payload: {
      ...state,
      phase: "MOVE_PIECE",
      targetPlace
    }
  }
}

const movePiece = (state: FieldState):FieldAction => {
  if (state.phase !== "MOVE_PIECE") throw Error(`Invalid Phase is specified: ${state.phase}, but expected MOVE_PIECE`)
  // TODO: selectedPiece, targetPlace, PlayerPiecesからpyalerPiecesを算出する
  const ownPieces = state.playerPieces[state.currentPlayer]
  const newPiece = {
    name: state.selectedPiece.name,
    place: state.targetPlace
  }
  // 移動させたpieceをアップデートする
  const selectedPieceIndex = ownPieces.findIndex(piece => JSON.stringify(piece) === JSON.stringify(state.selectedPiece))
  ownPieces[selectedPieceIndex] = newPiece

  let playerPieces:PlayerPieces = { 1: [], 2: []}

  if (state.currentPlayer === 1) {
    playerPieces = {
      1: ownPieces,
      2: state.playerPieces[state.opponentPlayer]
    }
  } else {
    playerPieces = {
      1: state.playerPieces[state.opponentPlayer],
      2: ownPieces
    }
  }

  return {
    type: "MOVE_PIECE",
    payload: {
      ...state,
      phase: "FINISH_TURN",
      playerPieces
    }
  }
}

const finishTurn = (state: FieldState):FieldAction => {
  if (state.phase !== "FINISH_TURN") throw Error(`Invalid Phase is specified: ${state.phase}, but expected FINISH_TURN`)

  const nextPlayer = state.currentPlayer === 1 ? 2 : 1
  return {
    type: "FINISH_TURN",
    payload: {
      playerPieces: state.playerPieces,
      phase: "SELECT_PIECE",
      currentPlayer: nextPlayer,
      opponentPlayer: state.currentPlayer,
      selectedPiece: null,
      targetPlace: null,
      availablePlaces: null
    }
  }
}

export {
  selectPiece,
  selectSquare,
  movePiece,
  finishTurn
}
