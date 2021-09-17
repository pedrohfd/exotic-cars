import { Card } from '../Card'
import { cars } from '../../../cars.json'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      {cars.map(car => (
        <Card car={car} key={car.type} />
      ))}
    </Container>
  )
}
