import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { BaseModal } from "components/BaseModal";
import React, { useState } from "react";
import { PromotionPieceName } from "types/common";

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

  const handleClick = () => {
    handlePromotion(promotionPieceName)
  }

  return (
    <>
      <BaseModal title="プロモーション先の駒を選択してください" open={open} handleClick={handleClick}>
        <RadioGroup defaultValue="Queen" name="promotion-radio-group" onChange={(e) => handleChange(e)}>
          <FormControlLabel value="Queen" control={<Radio />} label="クイーン" />
          <FormControlLabel value="Knight" control={<Radio />} label="ナイト" />
          <FormControlLabel value="Luke" control={<Radio />} label="ルーク" />
          <FormControlLabel value="Bishop" control={<Radio />} label="ビショップ" />
        </RadioGroup>
      </BaseModal>
    </>
  )
}
