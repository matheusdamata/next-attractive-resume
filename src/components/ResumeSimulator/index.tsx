import { GithubLogo, Globe, LinkedinLogo } from '@phosphor-icons/react'

import {
  ResumeSimulatorBody,
  ResumeSimulatorBodyLeft,
  ResumeSimulatorBodyRight,
  ResumeSimulatorContainer,
  ResumeSimulatorHeader,
  ResumeSimulatorHeaderLeft,
  ResumeSimulatorHeaderRight,
} from '../../styles/components/resumeSimulator'
import { formatterLink, formatterName } from '../../utils/formatter'
import axios from 'axios'

type ResumeSimulatorProps = {
  name: string
  office: string
  bio: string
  linkedin: string
  github: string
  website: string
  step: number
}

const ResumeSimulator = ({
  name,
  office,
  bio,
  linkedin,
  github,
  website,
  step,
}: ResumeSimulatorProps) => {
  async function handleConverPDF() {
    try {
      const res = await axios.post('/api/pdf/convert', {
        data: JSON.stringify(
          '<html><body><h1>Exemplo de conteúdo para o PDF</h1></body></html>',
        ),
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <ResumeSimulatorContainer>
      <ResumeSimulatorHeader>
        <ResumeSimulatorHeaderLeft>
          <h1>{formatterName(name) || 'Seu nome'}</h1>
          <strong>Desenvolvedor {office || '...'}</strong>
          <p>{bio || 'Sua biográfia...'}</p>
        </ResumeSimulatorHeaderLeft>
        <ResumeSimulatorHeaderRight>
          <div>
            <LinkedinLogo size={16} weight="duotone" />
            {formatterLink(linkedin)}
          </div>

          <div>
            <GithubLogo size={16} weight="duotone" />
            {formatterLink(github)}
          </div>

          <div>
            <Globe size={16} weight="duotone" />
            {formatterLink(website)}
          </div>
        </ResumeSimulatorHeaderRight>
      </ResumeSimulatorHeader>

      <ResumeSimulatorBody>
        <ResumeSimulatorBodyLeft></ResumeSimulatorBodyLeft>
        <ResumeSimulatorBodyRight></ResumeSimulatorBodyRight>
      </ResumeSimulatorBody>

      <button onClick={handleConverPDF}>DOWNLOAD</button>
    </ResumeSimulatorContainer>
  )
}

export default ResumeSimulator
