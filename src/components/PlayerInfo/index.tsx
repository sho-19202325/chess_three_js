import { FieldContext } from "contexts/FieldContext"
import { useContext } from "react"

export const PlayerInfo = () => {
  const { state } = useContext(FieldContext)

  return <h1 style={{ position: 'absolute', left: '3%' }}>Player { state.currentPlayer }のターンです</h1>
}