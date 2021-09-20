import { Card } from '../Card'
import carsData from '../../../cars.json'
import { Container } from './styles'
import Link from 'next/link'

export function Home() {
  return (
    <Container>
      {carsData.cars.map(car => (
        <Link href={`/cars/${car.type}`} key={car.type}>
          <a>
            <Card car={car} />
          </a>
        </Link>
      ))}
    </Container>
  )
}
