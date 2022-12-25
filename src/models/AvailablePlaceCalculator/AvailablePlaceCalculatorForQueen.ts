import { AvailablePlaceCalculator } from "models/AvailablePlaceCalculator";

export class AvailablePlaceCalculatorForQueen extends AvailablePlaceCalculator {
  run = () => {
    const availablePlacesInFront = this.findAvailablePlacesInFront(this.piece.place)
    const availablePlacesInBack = this.findAvailablePlacesInBack(this.piece.place)
    const availablePlacesInRight = this.findAvailablePlacesInRight(this.piece.place)
    const availablePlacesInLeft = this.findAvailablePlacesInLeft(this.piece.place)
    const availablePlacesInRightFront = this.findAvailablePlaceInRightFront(this.piece.place)
    const availablePlacesInLeftFront = this.findAvailablePlaceInLeftFront(this.piece.place)
    const availablePlacesInRightBack = this.findAvailablePlaceInRightBack(this.piece.place)
    const availablePlacesInLeftBack = this.findAvailablePlaceInLeftBack(this.piece.place)

    return [
      ...availablePlacesInFront,
      ...availablePlacesInBack,
      ...availablePlacesInRight,
      ...availablePlacesInLeft,
      ...availablePlacesInRightFront,
      ...availablePlacesInLeftFront,
      ...availablePlacesInRightBack,
      ...availablePlacesInLeftBack
    ]
  }
}
