import { Typography } from "@mui/material"
import { FieldContext } from "contexts/FieldContext"
import { useContext } from "react"

export const PlayerInfo = () => {
  const { state } = useContext(FieldContext)

  const style = {
    position: 'absolute',
    top: '2%',
    left: '1%'
  }

  return <Typography sx={style} variant="h3" >Player { state.currentPlayer }のターン</Typography>
}