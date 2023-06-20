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

type ResumeSimulatorProps = {
  name: string
  office: string
  bio: string
  linkedin: string
  github: string
  website: string
  option: 'simulator' | 'finished'
}

const ResumeSimulator = ({
  name,
  office,
  bio,
  linkedin,
  github,
  website,
  option,
}: ResumeSimulatorProps) => {
  return (
    <ResumeSimulatorContainer options={option}>
      <ResumeSimulatorHeader>
        <ResumeSimulatorHeaderLeft options={option}>
          <h1>{formatterName(name) || 'Seu nome'}</h1>
          <strong>Desenvolvedor {office || '...'}</strong>
          <p>{bio || 'Sua biográfia...'}</p>
        </ResumeSimulatorHeaderLeft>

        <ResumeSimulatorHeaderRight options={option}>
          <div>
            <LinkedinLogo
              size={option === 'simulator' ? 16 : 22}
              weight="duotone"
            />
            {formatterLink(linkedin)}
          </div>

          <div>
            <GithubLogo
              size={option === 'simulator' ? 16 : 22}
              weight="duotone"
            />
            {formatterLink(github)}
          </div>

          <div>
            <Globe size={option === 'simulator' ? 16 : 22} weight="duotone" />
            {formatterLink(website)}
          </div>
        </ResumeSimulatorHeaderRight>
      </ResumeSimulatorHeader>

      <ResumeSimulatorBody>
        <ResumeSimulatorBodyLeft></ResumeSimulatorBodyLeft>
        <ResumeSimulatorBodyRight options={option}></ResumeSimulatorBodyRight>
      </ResumeSimulatorBody>
    </ResumeSimulatorContainer>
  )
}

export default ResumeSimulator
