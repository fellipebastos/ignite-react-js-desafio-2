import styled from 'styled-components'

import { Container } from '../../styles/global'

export const CompleteContainer = styled(Container).attrs({ as: 'article' })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem 0;
  /* gap: 4.75rem; */

  header {
    h1 {
      font-size: ${({ theme }) => theme.fonts.size.title.lg};
      color: ${({ theme }) => theme.colors.yellow[700]};
    }

    p {
      font-size: ${({ theme }) => theme.fonts.size.text.xl};
      color: ${({ theme }) => theme.colors.gray[800]};
      margin-top: 0.25rem;
    }
  }

  img {
    align-self: flex-end;
    margin-left: auto;
    margin-bottom: -11px;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  margin-top: 2.5rem;
  max-width: 32.875rem;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.gray[100]},
      ${({ theme }) => theme.colors.gray[100]}
    ),
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  > div {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    span {
      display: flex;
      padding: 0.5rem;

      background: orange;
      border-radius: 999px;

      color: ${({ theme }) => theme.colors.white};
    }

    :nth-child(1) span {
      background: ${({ theme }) => theme.colors.purple[500]};
    }

    :nth-child(2) span {
      background: ${({ theme }) => theme.colors.yellow[500]};
    }

    :nth-child(3) span {
      background: ${({ theme }) => theme.colors.yellow[700]};
    }
  }
`
