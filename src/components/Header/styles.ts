import styled from 'styled-components'

export const Container = styled.header`
  background: var(--white-500);
  box-shadow: 0px 12px 50px -18px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 12px 50px -18px rgba(0, 0, 0, 0.24);
`

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  div {
    background: var(--gray-200);
    align-items: center;
    display: flex;

    opacity: 0.59;
    height: 2.25rem;
    width: 35rem;
    margin-left: 5rem;

    border-radius: 100px;

    img {
      margin-left: 1.688rem;
      height: 1.063rem;
    }

    label {
      color: var(--gray-600);
      margin-left: 0.371rem;
      font-weight: 600;
      font-size: 0.75rem;
    }

    section {
      display: flex;
      align-items: center;

      margin-left: 3.938rem;
    }

    > div {
      background: var(--white-500);
      display: flex;
      align-items: center;
      justify-items: center;
      opacity: 1;

      width: 1.875rem;
      height: 1.875rem;

      margin-left: 2.7rem;

      box-shadow: 0px 5px 25px -5px rgba(0, 0, 0, 0.69);
      -webkit-box-shadow: 0px 5px 25px -5px rgba(0, 0, 0, 0.69);

      img {
        margin: 0 auto;
      }
    }
  }

  button {
    color: var(--blue-500);
    background: transparent;

    padding: 0.438rem 1rem;

    border: 0;
    margin-left: 5rem;

    font-size: 1rem;
    font-weight: 700;

    & + button {
      background: transparent;

      margin-left: 1.75rem;
      border: 2px solid var(--blue-500);
      border-radius: 0.813rem;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
