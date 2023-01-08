import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const InputStyled = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray[300]};
  box-shadow: inset 0px 0px 0px 1px ${(props) => props.theme.colors.gray[400]};
  outline: none;

  font-size: ${(props) => props.theme.fonts.size.text.sm};
  color: ${(props) => props.theme.colors.gray[700]};

  ::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }

  :focus {
    box-shadow: inset 0px 0px 0px 1px
      ${(props) => props.theme.colors.yellow[700]};
  }
`

export const InfoText = styled.span`
  position: absolute;
  right: 0;

  font-size: ${(props) => props.theme.fonts.size.text.xs};
  font-style: italic;
  line-height: 130%;
  color: ${(props) => props.theme.colors.gray[600]};

  padding: 0.75rem;
  background: ${(props) => props.theme.colors.gray[300]};
`
