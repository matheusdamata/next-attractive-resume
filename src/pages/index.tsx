import Head from 'next/head'

import {
  HomeAlertBox,
  HomeAlertBoxContainer,
  HomeContainer,
} from '../styles/pages/home'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus da Mata - Portfólio</title>
      </Head>

      <HomeContainer>
        <section>
          <strong>👏 Olá, pessoa!</strong>
          <h1>
            Construa um currículo de <br />
            Programador <span>ATRATIVO.</span>
          </h1>

          <HomeAlertBoxContainer>
            <HomeAlertBox>
              <p>
                O primeiro passo para <b>se tornar um desenvolvedor</b> é criar
                um currículo atrativo. A maioria dos recrutadores não passa
                muito tempo revisando currículos de programadores web. Na
                verdade, eles geralmente analisam cada currículo por,{' '}
                <b>em média, 6 segundos</b> antes de decidir se o candidato se
                encaixa na descrição da vaga.
              </p>
            </HomeAlertBox>
          </HomeAlertBoxContainer>

          <Link href="/selecione">Começar</Link>
        </section>
      </HomeContainer>
    </>
  )
}
