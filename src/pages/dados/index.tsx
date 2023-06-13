import { useState } from 'react'
import { ResumeSimulator } from '../../components/ResumeSimulator'
import { StepOptions } from '../../components/StepOptions'
import {
  DataButton,
  DataContainer,
  DataContent,
  DataInputContainer,
  DataLink,
  DataSideLeft,
  DataSideLeftContent,
} from '../../styles/pages/data'
import { CaretRight } from 'phosphor-react'
import Head from 'next/head'

export default function Data() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')

  const [step, setStep] = useState(1)

  return (
    <>
      <Head>
        <title>Preencha seus dados - Currículo</title>
      </Head>

      <DataContainer>
        <DataSideLeft>
          <DataSideLeftContent>
            <h2>Preenche seus dados</h2>

            {step === 1 ? (
              <DataInputContainer>
                <input
                  type="text"
                  placeholder="Digite seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input type="email" placeholder="Digite seu E-mail" />

                <textarea
                  rows={5}
                  placeholder="Descreva sobre você"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </DataInputContainer>
            ) : (
              <DataInputContainer>
                <input type="text" placeholder="Digite seu Linkedin" />

                <input type="text" placeholder="Digite seu Github" />

                <input type="text" placeholder="Digite seu Site" />
              </DataInputContainer>
            )}

            <DataButton onClick={() => setStep(2)}>
              Avançar <CaretRight size={14} weight="bold" />
            </DataButton>

            <DataLink href="/selecione">Voltar para Opções</DataLink>
          </DataSideLeftContent>

          <footer>
            <StepOptions options={step} />
          </footer>
        </DataSideLeft>

        <ResumeSimulator name={name} bio={bio} />
      </DataContainer>
    </>
  )
}
