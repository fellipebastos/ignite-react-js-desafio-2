import styled from 'styled-components'

import { Container } from '../../styles/global'

export const CheckoutContainer = styled(Container)`
  padding: 2.5rem 0;

  form {
    display: flex;
    gap: 2rem;
  }
`

const Section = styled.section`
  h2 {
    font-size: ${(props) => props.theme.fonts.size.title.xs};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: 700;
    color: ${(props) => props.theme.colors.gray[800]};

    margin-bottom: 1rem;
  }

  > div {
    padding: 2.5rem;

    background: ${(props) => props.theme.colors.gray[200]};
    border-radius: 6px;

    + div {
      margin-top: 0.75rem;
    }
  }
`

export const OrderSection = styled(Section)`
  max-width: 40rem;
`

const SectionInfo = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.fonts.size.text.md};
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray[800]};
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.text.sm};
    color: ${(props) => props.theme.colors.gray[700]};

    margin-top: 2px;
  }
`

export const AddressInfo = styled(SectionInfo)`
  svg {
    color: ${(props) => props.theme.colors.yellow[700]};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 1rem 0.75rem;

  > div {
    :nth-child(1) {
      grid-column: 1 / -3;
    }
    :nth-child(2) {
      grid-column: 1 / -1;
    }
    :nth-child(4) {
      grid-column: 2 / -1;
    }
    :nth-child(5) {
    }
  }
`

export const PaymentInfo = styled(SectionInfo)`
  svg {
    color: ${(props) => props.theme.colors.purple[500]};
  }
`

export const PaymentForm = styled.div`
  display: flex;
  gap: 0.75rem;

  > div {
    flex: 1;
    position: relative;

    label {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      border-radius: 6px;
      background: ${(props) => props.theme.colors.gray[400]};
      padding: 1rem;

      font-size: ${(props) => props.theme.fonts.size.text.xs};
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.gray[700]};
      line-height: 160%;

      cursor: pointer;
      transition: background 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      svg {
        margin-right: 0.75rem;
        color: ${(props) => props.theme.colors.purple[500]};
      }

      :hover {
        background: ${(props) => props.theme.colors.gray[500]};
        color: ${(props) => props.theme.colors.gray[800]};
      }
    }

    input[type='radio'] {
      opacity: 0;
      position: absolute;
      top: 0px;
      left: 0px;
      cursor: pointer;

      :checked ~ label {
        background: ${(props) => props.theme.colors.purple[300]};
        box-shadow: inset 0px 0px 0px 1px
          ${(props) => props.theme.colors.purple[500]};
      }
    }
  }
`

export const ResumeSection = styled(Section).attrs({ as: 'aside' })`
  flex: 1;

  > div {
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
  }

  ul {
    margin-bottom: 1.5rem;
  }

  li {
    padding-bottom: 1.5rem;
    border-bottom: solid 1px ${(props) => props.theme.colors.gray[400]};

    + li {
      padding: 1.5rem 0;
    }
  }

  article {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 0.5rem 0.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
          font-family: ${(props) => props.theme.fonts.primary};
          font-size: ${(props) => props.theme.fonts.size.text.md};
          font-weight: 400;
          color: ${(props) => props.theme.colors.gray[800]};
        }

        span {
          font-size: ${(props) => props.theme.fonts.size.text.md};
          font-weight: 700;
          color: ${(props) => props.theme.colors.gray[700]};
        }
      }

      > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        > button {
          display: flex;
          align-items: center;
          gap: 0.25rem;

          padding: 0.5rem;
          border-radius: 6px;
          background: ${(props) => props.theme.colors.gray[400]};

          font-size: ${(props) => props.theme.fonts.size.text.xs};
          color: ${(props) => props.theme.colors.gray[700]};
          text-transform: uppercase;

          transition: background 0.15s ease-in-out;

          :hover {
            background: ${(props) => props.theme.colors.gray[500]};
          }

          svg {
            color: ${(props) => props.theme.colors.purple[500]};
          }
        }
      }
    }
  }

  button[type='submit'] {
    margin-top: 1.5rem;
    width: 100%;

    display: flex;
    justify-content: center;
    padding: 0.75rem;

    font-size: ${(props) => props.theme.fonts.size.text.sm};
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    border-radius: 6px;

    background: ${(props) => props.theme.colors.yellow[500]};
    transition: background 0.15s ease-in-out;

    :hover {
      background: ${(props) => props.theme.colors.yellow[700]};
    }
  }
`

export const ResumeTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    :last-of-type {
      font-size: ${(props) => props.theme.fonts.size.text.xl};
    }

    span {
      color: ${(props) => props.theme.colors.gray[700]};

      :first-of-type {
        font-size: ${(props) => props.theme.fonts.size.text.sm};
      }

      :last-of-type {
        font-size: ${(props) => props.theme.fonts.size.text.md};
      }
    }
  }
`
