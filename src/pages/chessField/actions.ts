import { FieldAction, FieldState, PieceInfo, Place } from "common/types";

const selectPiece = (state: FieldState, selectedPiece: PieceInfo):FieldAction => {
  // TODO: availablePlaceをstate.playerPiecesとselectedPieceから算出する
  const availablePlaces:Place[] = []

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
  // TODO: selectedPiece, targetPlace, PlayerPiecesからpyalerPiecesを算出する
  const player1Pieces:PieceInfo[] = []
  const player2Pieces:PieceInfo[] = []
  const playerPieces = { player1: player1Pieces, player2: player2Pieces }

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
  const nextPlayer = state.currentPlayer === 1 ? 2 : 1
  return {
    type: "FINISH_TURN",
    payload: {
      ...state,
      phase: "SELECT_SQUARE",
      currentPlayer: nextPlayer,
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
