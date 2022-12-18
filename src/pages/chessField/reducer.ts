import { FieldAction, FieldState } from "common/types";

const reducer = (state: FieldState, action: FieldAction):FieldState => {
  switch (action.type) {
    case "SELECT_PIECE":
      return {
        ...state,
        phase: action.payload.phase,
        selectedPiece: action.payload.selectedPiece,
        availablePlaces: action.payload.availablePlaces
      }
    case "SELECT_SQUARE":
      return {
        ...state,
        phase: action.payload.phase,
        targetPlace: action.payload.targetPlace,
      }
    case "MOVE_PIECE":
      return {
        ...state,
        phase: action.payload.phase,
        playerPieces: action.payload.playerPieces
      }
    case "FINISH_TURN":
      return {
        ...state,
        phase: action.payload.phase,
        currentPlayer: action.payload.currentPlayer,
        selectedPiece: action.payload.selectedPiece,
        targetPlace: action.payload.targetPlace,
        availablePlaces: action.payload.availablePlaces
      }
    default:
      return state
  }
}

export default reducer
