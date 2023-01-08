import styled from 'styled-components'

export const CounterContainer = styled.div`
  background: ${(props) => props.theme.colors.gray[400]};
  border-radius: 6px;
  padding: 0.5rem;

  width: 4.5rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    color: ${(props) => props.theme.colors.purple[500]};

    transition: color 0.15s ease-in-out;

    :hover {
      color: ${(props) => props.theme.colors.purple[700]};
    }
  }

  span {
    color: ${(props) => props.theme.colors.gray[900]};
    line-height: 0;
    font-size: ${(props) => props.theme.fonts.size.text.md};
  }
`
