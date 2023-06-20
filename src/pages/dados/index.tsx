import { useState } from 'react'
import Head from 'next/head'

import ResumeSimulator from '../../components/ResumeSimulator'
import { StepOptions } from '../../components/StepOptions'
import {
  DataButton,
  DataButtonContainer,
  DataContainer,
  DataContent,
  DataInputContainer,
  DataSideLeft,
  DataSideLeftContent,
} from '../../styles/pages/data'
import { Header } from '../../components/Header'

import { CaretRight } from 'phosphor-react'

import axios from 'axios'
import fileDownload from 'js-file-download'

export default function Data() {
  // step 1
  const [name, setName] = useState('')
  const [office, setOffice] = useState('')
  const [bio, setBio] = useState('')

  // step 2
  const [linkedin, setLinkedin] = useState('')
  const [github, setGithub] = useState('')
  const [website, setWebsite] = useState('')

  // step 3
  const [titleMainProject, setTitleMainProject] = useState('')
  const [deployMainProject, setDeployMainProject] = useState('')
  const [repoMainProject, setRepoMainProject] = useState('')
  const [detailsMainProject, setDetailsMainProject] = useState('')

  // step 4

  // step 5

  // step 6

  // step 7

  const [step, setStep] = useState(1)

  async function handleTest() {
    try {
      const response = await axios.get('/api/pdf/convert')

      const pdf = await fetch(`./temp/${response.data.name}.pdf`)
      const pdfBlob = await pdf.blob()

      fileDownload(pdfBlob, `${response.data.name}.pdf`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Dados | Serei Contratado</title>
      </Head>

      <DataContainer>
        <Header />

        <DataContent>
          <DataSideLeft>
            <DataSideLeftContent>
              {step === 1 ? (
                <>
                  <h2>Preenche seus dados</h2>

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

                  <button onClick={handleTest}>Download</button>
                </>
              ) : step === 2 ? (
                <>
                  <h2>Suas redes sociais</h2>

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
                </>
              ) : step === 3 ? (
                <>
                  <h2>Adicione um projeto principal</h2>

                  <DataInputContainer>
                    <input
                      type="text"
                      placeholder="Título do projeto em destaque"
                      value={titleMainProject}
                      onChange={(e) => setTitleMainProject(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Link do deploy"
                      value={deployMainProject}
                      onChange={(e) => setDeployMainProject(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Link do repositório"
                      value={repoMainProject}
                      onChange={(e) => setRepoMainProject(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Adicione detalhes do projeto"
                      value={detailsMainProject}
                      onChange={(e) => setDetailsMainProject(e.target.value)}
                    />
                  </DataInputContainer>
                </>
              ) : step === 4 ? (
                <>
                  <h2>Experiência profissional</h2>

                  <DataInputContainer>
                    <input
                      type="text"
                      placeholder="Qual foi sua atividade?"
                      value={titleMainProject}
                      onChange={(e) => setTitleMainProject(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Remoto, presencial ou híbrido?"
                      value={deployMainProject}
                      onChange={(e) => setDeployMainProject(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Foi quando?"
                      value={repoMainProject}
                      onChange={(e) => setRepoMainProject(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Atividades realizadas nessa experiência"
                      value={detailsMainProject}
                      onChange={(e) => setDetailsMainProject(e.target.value)}
                    />
                  </DataInputContainer>
                </>
              ) : step === 5 ? (
                <>
                  <h2>Suas competências</h2>

                  <DataInputContainer>
                    <input
                      type="text"
                      placeholder="Exemplo: HTML, Javascript..."
                      value={titleMainProject}
                      onChange={(e) => setTitleMainProject(e.target.value)}
                    />
                  </DataInputContainer>
                </>
              ) : step === 6 ? (
                <>
                  <h2>Educação</h2>

                  <DataInputContainer>
                    <input
                      type="text"
                      placeholder="Digite o nome da instituição"
                      value={titleMainProject}
                      onChange={(e) => setTitleMainProject(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="Quando você iniciou?"
                      value={titleMainProject}
                      onChange={(e) => setTitleMainProject(e.target.value)}
                    />
                  </DataInputContainer>
                </>
              ) : step === 7 ? (
                <>
                  <h2>Objetivo profissional</h2>

                  <DataInputContainer>
                    <textarea
                      rows={5}
                      placeholder="Descreva..."
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </DataInputContainer>
                </>
              ) : null}

              <DataButtonContainer>
                <DataButton
                  onClick={() => setStep((state) => state + 1)}
                  options="withBackground"
                >
                  Avançar <CaretRight size={14} weight="bold" />
                </DataButton>

                {step >= 2 && (
                  <DataButton
                    onClick={() =>
                      setStep((state) => (state === 1 ? 1 : state - 1))
                    }
                    options="withEdge"
                  >
                    Voltar
                  </DataButton>
                )}
              </DataButtonContainer>
            </DataSideLeftContent>

            <footer>
              <StepOptions options={step} />
            </footer>
          </DataSideLeft>

          <ResumeSimulator
            name={name.toLowerCase()}
            office={office}
            bio={bio}
            linkedin={linkedin}
            github={github}
            website={website}
            option="simulator"
          />
        </DataContent>
      </DataContainer>
    </>
  )
}
