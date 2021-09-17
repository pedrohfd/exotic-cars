import { Container } from './styles'

interface CarProps {
  car: {
    brand: string
    type: string
    image: string
    'image@2x': string
    value: string
  }
}

export function Card({ car }: CarProps) {
  return (
    <Container>
      <h1>{car.brand}</h1>
      <h2>{car.type}</h2>

      <img src={car['image@2x']} alt={car.type} />

      <label>
        <strong>{car.value}</strong>/day
      </label>
    </Container>
  )
}
