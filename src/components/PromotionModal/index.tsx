import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup, Typography } from "@mui/material"
import React, { useState } from "react";
import { PromotionPieceName } from "types/common";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

type PromotionModalProps = {
  open: boolean,
  handlePromotion: (promotionPieceName: PromotionPieceName) => void
}

export const PromotionModal = ({ open, handlePromotion }:PromotionModalProps) => {
  const [ promotionPieceName, setPromotionPieceName ] = useState<PromotionPieceName>("Queen")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const promotionPieceName = e.target.value as PromotionPieceName
    setPromotionPieceName(promotionPieceName)
  }

  return (
    <>
      <Modal open={open}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            プロモーション先の駒を選択してください
          </Typography>
          <RadioGroup defaultValue="Queen" name="promotion-radio-group" onChange={(e) => handleChange(e)}>
            <FormControlLabel value="Queen" control={<Radio />} label="クイーン" />
            <FormControlLabel value="Knight" control={<Radio />} label="ナイト" />
            <FormControlLabel value="Luke" control={<Radio />} label="ルーク" />
            <FormControlLabel value="Bishop" control={<Radio />} label="ビショップ" />
          </RadioGroup>
          <Button variant="contained" onClick={() => handlePromotion(promotionPieceName)}>OK</Button>
        </Box>
      </Modal>
    </>
  )
}
