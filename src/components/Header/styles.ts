import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from '../../styles/global'

export const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[100]};

  position: sticky;
  top: 0;
`

export const HeaderContent = styled(Container).attrs({ as: 'header' })`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;

    font-size: 0.875rem;

    svg {
      border-radius: 6px;
    }

    &:first-of-type {
      background: ${({ theme }) => theme.colors.purple[300]};
      color: ${({ theme }) => theme.colors.purple[700]};

      svg {
        color: ${({ theme }) => theme.colors.purple[500]};
      }
    }
  }
`

export const ShoppingCartButton = styled(NavLink)`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.yellow[300]};

  position: relative;
  line-height: 0;

  span {
    font-size: ${({ theme }) => theme.fonts.size.text.xs};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.yellow[700]};
    border-radius: 999px;
    width: 20px;
    height: 20px;

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -8px;
    right: -8px;
  }

  svg {
    color: ${({ theme }) => theme.colors.yellow[700]};
  }
`
