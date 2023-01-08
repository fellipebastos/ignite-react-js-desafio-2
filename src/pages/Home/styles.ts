import styled from 'styled-components'

import { Container } from '../../styles/global'

import introBackgroundImg from '../../assets/intro-background.png'

export const IntroContainer = styled.section`
  background: url(${introBackgroundImg}) no-repeat center;
`

export const IntroContent = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 5.75rem 0;

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 590px;

    h1 {
      font-size: ${(props) => props.theme.fonts.size.title.xl};
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: 900;
      line-height: 130%;
      color: ${(props) => props.theme.colors.gray[900]};
    }

    p {
      font-size: ${(props) => props.theme.fonts.size.text.xl};
      line-height: 130%;
      color: ${(props) => props.theme.colors.gray[800]};
    }
  }

  img {
    height: 360px;
    width: auto;
  }
`

export const FeatureList = styled.ul`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: 20px 40px;

  li {
    display: flex;
    align-items: center;

    color: ${(props) => props.theme.colors.gray[700]};

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      margin-right: 0.75rem;

      border-radius: 999px;
      color: ${(props) => props.theme.colors.white};
    }

    &:nth-child(1) {
      span {
        background: ${(props) => props.theme.colors.yellow[700]};
      }
    }

    &:nth-child(2) {
      span {
        background: ${(props) => props.theme.colors.gray[700]};
      }
    }

    &:nth-child(3) {
      span {
        background: ${(props) => props.theme.colors.yellow[500]};
      }
    }

    &:nth-child(4) {
      span {
        background: ${(props) => props.theme.colors.purple[500]};
      }
    }
  }
`

export const CoffeesContainer = styled(Container).attrs({ as: 'section' })`
  padding: 2rem 0;

  h2 {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fonts.size.title.lg};
    font-weight: 900;
    line-height: 130%;
    color: ${(props) => props.theme.colors.gray[800]};
  }
`

export const CoffeesContent = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
