import { AvailablePlaceCalculator } from "models/AvailablePlaceCalculator";

export class AvailablePlaceCalculatorForLuke extends AvailablePlaceCalculator {
  run = () => {
    const availablePlacesInFront = this.findAvailablePlacesInFront(this.piece.place)
    const availablePlacesInBack = this.findAvailablePlacesInBack(this.piece.place)
    const availablePlacesInRight = this.findAvailablePlacesInRight(this.piece.place)
    const availablePlacesInLeft = this.findAvailablePlacesInLeft(this.piece.place)

    return [
      ...availablePlacesInFront,
      ...availablePlacesInBack,
      ...availablePlacesInRight,
      ...availablePlacesInLeft
    ]
  }
}