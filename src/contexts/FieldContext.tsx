import { PieceInfo } from "types/common";
import { FieldAction, FieldState } from "types/fieldState"
import reducer from "pages/chessField/reducer";
import { createContext, ReactNode, useReducer } from "react";

type FieldContextProps = {
  state: FieldState,
  dispatch: React.Dispatch<FieldAction>
}

const INITIAL_PICES_FOR_PLEYER_1:PieceInfo[] = [
  { name: "Pawn", place: [1, 2] },
  { name: "Pawn", place: [2, 2] },
  { name: "Pawn", place: [3, 2] },
  { name: "Pawn", place: [4, 2] },
  { name: "Pawn", place: [5, 2] },
  { name: "Pawn", place: [6, 2] },
  { name: "Pawn", place: [7, 2] },
  { name: "Pawn", place: [8, 2] },
  { name: "Luke", place: [1, 1] },
  { name: "Luke", place: [8, 1] },
  { name: "Knight", place: [2, 1] },
  { name: "Knight", place: [7, 1] },
  { name: "Bishop", place: [3, 1] },
  { name: "Bishop", place: [6, 1] },
  { name: "Queen", place: [4, 1] },
  { name: "King", place: [5, 1] }
]

const INITIAL_PICES_FOR_PLEYER_2:PieceInfo[] = [
  { name: "Pawn", place: [1, 7] },
  { name: "Pawn", place: [2, 7] },
  { name: "Pawn", place: [3, 7] },
  { name: "Pawn", place: [4, 7] },
  { name: "Pawn", place: [5, 7] },
  { name: "Pawn", place: [6, 7] },
  { name: "Pawn", place: [7, 7] },
  { name: "Pawn", place: [8, 7] },
  { name: "Luke", place: [1, 8] },
  { name: "Luke", place: [8, 8] },
  { name: "Knight", place: [2, 8] },
  { name: "Knight", place: [7, 8] },
  { name: "Bishop", place: [3, 8] },
  { name: "Bishop", place: [6, 8] },
  { name: "Queen", place: [5, 8] },
  { name: "King", place: [4, 8] }
]

const initialState:FieldState = {
  phase: "SELECT_PIECE",
  currentPlayer: 1,
  opponentPlayer: 2,
  selectedPiece: null,
  targetPlace: null,
  playerPieces: {
    1: INITIAL_PICES_FOR_PLEYER_1,
    2: INITIAL_PICES_FOR_PLEYER_2
  },
  availablePlaces: null,
  winner: null
}

export const FieldContext = createContext<FieldContextProps>({
  state: initialState,
  dispatch: () => {}
})

const FieldContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <FieldContext.Provider value={{ state, dispatch }} >
      { children }
    </FieldContext.Provider>
  )
}

export default FieldContextProvider
