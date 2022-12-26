import { FieldAction, FieldState } from "types/fieldState";

const reducer = (state: FieldState, action: FieldAction):FieldState => {
  switch (action.type) {
    case "SELECT_PIECE":
      if (state.phase !== "SELECT_PIECE" && state.phase !== "SELECT_SQUARE") return state
      
      return {
        ...state,
        phase: action.payload.phase,
        selectedPiece: action.payload.selectedPiece,
        availablePlaces: action.payload.availablePlaces
      }
    case "SELECT_SQUARE":
      if (state.phase !== "SELECT_SQUARE") return state

      return {
        ...state,
        phase: action.payload.phase,
        targetPlace: action.payload.targetPlace,
        playerPieces: action.payload.playerPieces
      }
    case "MOVE_PIECE":
      if (state.phase !== "MOVE_PIECE") return state

      return {
        ...state,
        phase: action.payload.phase,
        playerPieces: action.payload.playerPieces
      }
    case "FINISH_TURN":
      if (state.phase !== "FINISH_TURN") return state

      return {
        ...state,
        phase: action.payload.phase,
        currentPlayer: action.payload.currentPlayer,
        opponentPlayer: action.payload.opponentPlayer,
        selectedPiece: action.payload.selectedPiece,
        targetPlace: action.payload.targetPlace,
        availablePlaces: action.payload.availablePlaces
      }
    default:
      return state
  }
}

export default reducer
