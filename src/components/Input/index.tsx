import { forwardRef, InputHTMLAttributes, Ref } from 'react'

import { InfoText, InputContainer, InputStyled } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  info?: string
}

function InputComponent(
  { info, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <InputContainer ref={ref}>
      <InputStyled {...rest} />
      {info && <InfoText>{info}</InfoText>}
    </InputContainer>
  )
}

export const Input = forwardRef(InputComponent)
