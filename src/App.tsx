import FieldContextProvider from "contexts/FieldContext";
import { ChessField } from "pages/chessField";

function App() {
  return (
    <FieldContextProvider>
      <ChessField />
    </FieldContextProvider>
  );
}

export default App;
