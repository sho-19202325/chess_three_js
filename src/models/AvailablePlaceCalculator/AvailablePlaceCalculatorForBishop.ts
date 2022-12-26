import { AvailablePlaceCalculator } from "models/AvailablePlaceCalculator";

export class AvailablePlaceCalculatorForBishop extends AvailablePlaceCalculator {
  run = () => {
    const availablePlacesInRightFront = this.findAvailablePlaceInRightFront(this.piece.place)
    const availablePlacesInLeftFront = this.findAvailablePlaceInLeftFront(this.piece.place)
    const availablePlacesInRightBack = this.findAvailablePlaceInRightBack(this.piece.place)
    const availablePlacesInLeftBack = this.findAvailablePlaceInLeftBack(this.piece.place)

    return [
      ...availablePlacesInRightFront,
      ...availablePlacesInLeftFront,
      ...availablePlacesInRightBack,
      ...availablePlacesInLeftBack
    ]
  }
}
