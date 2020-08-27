import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 5.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 2rem;

    margin-top: 2.4rem;
  }
`
