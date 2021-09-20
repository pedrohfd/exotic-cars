import styled from 'styled-components'

export const Container = styled.main`
  padding: 3rem 6.875rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  a {
    text-decoration: none;
    color: var(--gray-700);
  }
`
