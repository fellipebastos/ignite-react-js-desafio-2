import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.gray[200]};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem;

  img {
    margin: -1.25rem auto auto;
    width: 7.5rem;
  }

  header {
    h2 {
      margin-top: 1rem;

      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.fonts.size.title.sm};
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme.colors.gray[800]};
      text-align: center;
    }

    p {
      margin-top: 0.5rem;

      font-size: ${(props) => props.theme.fonts.size.text.sm};
      line-height: 130%;
      color: ${(props) => props.theme.colors.gray[600]};
      text-align: center;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;

    margin-top: 2.125rem;
  }
`
export const CoffeeCardTags = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  margin-top: 0.75rem;

  li {
    border-radius: 999px;
    padding: 0.25rem 0.5rem;

    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.yellow[700]};
    background: ${(props) => props.theme.colors.yellow[300]};
  }
`
export const CoffeeCardPrice = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fonts.size.title.md};
  font-weight: 800;
  color: ${(props) => props.theme.colors.gray[700]};
  line-height: 130%;

  span {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.fonts.size.text.sm};
    font-weight: 400;
  }
`

export const CoffeeCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ShoppingCartButton = styled.button`
  background: ${(props) => props.theme.colors.purple[700]};
  color: ${(props) => props.theme.colors.gray[200]};
  border-radius: 6px;
  padding: 0.5rem;

  transition: background 0.15s ease-in-out;

  :hover {
    background: ${(props) => props.theme.colors.purple[500]};
  }
`
