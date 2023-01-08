import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import introImg from '../../assets/intro.png'

import { coffees } from '../../mocks/coffees'

import { CoffeeCard } from './components/CoffeeCard'

import {
  IntroContent,
  FeatureList,
  IntroContainer,
  CoffeesContainer,
  CoffeesContent,
} from './styles'

export function Home() {
  return (
    <>
      <IntroContainer>
        <IntroContent>
          <div>
            <header>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </header>

            <FeatureList>
              <li>
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </li>
              <li>
                <span>
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </li>
              <li>
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </li>
              <li>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </li>
            </FeatureList>
          </div>

          <img
            src={introImg}
            alt="Imagem de capa mostrando um copo de café e algumas sementes em volta."
          />
        </IntroContent>
      </IntroContainer>
      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <CoffeesContent>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} data={coffee} />
          ))}
        </CoffeesContent>
      </CoffeesContainer>
    </>
  )
}
