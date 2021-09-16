import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src='/images/logo.svg' alt='Logo' />

        <div>
          <img src='/images/location.svg' alt='Location' />
          <label>North Carolina, NC 90025</label>

          <section>
            <img src='/images/calendar.svg' alt='Calendar' />
            <label>11/03/2021</label>

            <img src='/images/calendar.svg' alt='Calendar' />
            <label>12/12/2021</label>
          </section>

          <div>
            <img src='/images/magnifying-glass.svg' alt='Lupa' />
          </div>
        </div>

        <button>Sign up</button>
        <button>Sign in</button>
      </Content>
    </Container>
  )
}
