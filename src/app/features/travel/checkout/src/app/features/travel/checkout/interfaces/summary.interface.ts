export interface Summary {
  origin: string
  destination: string
  distance: number
  adults: number
  children: number
  flightType: FlightType
  totalPerAdult: number
  totalPerChildren: number
  miles: number
  discountByMiles: number
  total: number
}

export type FlightType = 'ECONOMIC' | 'EXECUTIVE'
