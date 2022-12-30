import { Piece } from "components/Piece"
import { FieldContext } from "contexts/FieldContext"
import { useContext } from "react"
import { Player } from "types/common"

export const PlayerPieces = ({ player }: { player: Player }) => {
  const { state } = useContext(FieldContext)
  const ownPieces = state.playerPieces[player]

  return (
    <>
      {ownPieces.map((item, index) => {
        return <Piece 
                 key={index}
                 piece={item}
                 player={player}
               />
      })}
    </>
  )
}
