import { Button, Typography } from "@mui/material"
import { BaseModal } from "components/BaseModal";
import { FieldContext } from "contexts/FieldContext";
import React, { useContext } from "react";

type WinnerModalProps = {
  open: boolean
  handleCloseWinnerModal: () => void
}

export const WinnerModal = ({ open, handleCloseWinnerModal }:WinnerModalProps) => {
  const { state } = useContext(FieldContext)

  return (
    <>
      <BaseModal title={`Player ${state.winner}の勝利です!`} open={open} handleClick={handleCloseWinnerModal}>
        <Typography>
          もう一度最初からゲームを始めるには、OKボタンをクリックしてください。
        </Typography>
      </BaseModal>
    </>
  )
}
