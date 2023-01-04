// 小数点第CALUCULATE_DIGIT位まで計算の対象とする
const CALUCULATE_DIGIT = 100

export const sumOfFloat = (targetFloatA: number, targetFloatB: number) => {
  return Math.round((targetFloatA + targetFloatB) * CALUCULATE_DIGIT) / CALUCULATE_DIGIT
}