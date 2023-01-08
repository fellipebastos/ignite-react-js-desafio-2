import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: ${(props) => props.theme.colors.yellow[700]} solid 1px;
  }

  body {
    background: ${(props) => props.theme.colors.gray[100]};
    color: ${(props) => props.theme.colors.gray[700]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.fonts.size.text.md};
    line-height: 1.3
  }

  h1, h2, h3, h4, h5, h6 {
    font-family:  ${(props) => props.theme.fonts.secondary};
    font-weight: 800;
  }

  button {
    border: 0;
    line-height: 0;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
`

export const Container = styled.div`
  width: min(70rem, 100%);
  margin: auto;
`
