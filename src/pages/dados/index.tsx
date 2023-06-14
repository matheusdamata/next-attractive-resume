import { useState } from 'react'
import { ResumeSimulator } from '../../components/ResumeSimulator'
import { StepOptions } from '../../components/StepOptions'
import {
  DataButton,
  DataContainer,
  DataContent,
  DataInputContainer,
  DataSideLeft,
  DataSideLeftContent,
} from '../../styles/pages/data'
import { CaretRight } from 'phosphor-react'
import Head from 'next/head'
import { Header } from '../../components/Header'

export default function Data() {
  const [name, setName] = useState('')
  const [office, setOffice] = useState('')
  const [bio, setBio] = useState('')

  const [linkedin, setLinkedin] = useState('')
  const [github, setGithub] = useState('')
  const [website, setWebsite] = useState('')

  const [step, setStep] = useState(1)

  return (
    <>
      <Head>
        <title>Preencha seus dados - Currículo</title>
      </Head>

      <DataContainer>
        <Header />

        <DataContent>
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

                  <input
                    type="text"
                    placeholder="Você é... Front-end ou Banck-end?"
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                  />

                  <textarea
                    rows={5}
                    placeholder="Descreva sobre você"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </DataInputContainer>
              ) : (
                <DataInputContainer>
                  <input
                    type="text"
                    placeholder="Digite seu Linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Digite seu Github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Digite seu Site"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </DataInputContainer>
              )}

              <DataButton onClick={() => setStep(2)} options="withBackground">
                Avançar <CaretRight size={14} weight="bold" />
              </DataButton>

              {step === 2 && (
                <DataButton onClick={() => setStep(1)} options="withEdge">
                  Voltar
                </DataButton>
              )}
            </DataSideLeftContent>

            <footer>
              <StepOptions options={step} />
            </footer>
          </DataSideLeft>

          <ResumeSimulator
            name={name}
            office={office}
            bio={bio}
            linkedin={linkedin}
            github={github}
            website={website}
          />
        </DataContent>
      </DataContainer>
    </>
  )
}
