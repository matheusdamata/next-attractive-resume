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
import { formatterName } from '../../utils/formatter'

type ResumeSimulatorProps = {
  name: string
  office: string
  bio: string
  linkedin: string
  github: string
  website: string
}

export function ResumeSimulator({
  name,
  office,
  bio,
  linkedin,
  github,
  website,
}: ResumeSimulatorProps) {
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
            {linkedin}
          </div>

          <div>
            <GithubLogo size={16} weight="duotone" />
            {github}
          </div>

          <div>
            <Globe size={16} weight="duotone" />
            {website}
          </div>
        </ResumeSimulatorHeaderRight>
      </ResumeSimulatorHeader>

      <ResumeSimulatorBody>
        <ResumeSimulatorBodyLeft></ResumeSimulatorBodyLeft>
        <ResumeSimulatorBodyRight></ResumeSimulatorBodyRight>
      </ResumeSimulatorBody>
    </ResumeSimulatorContainer>
  )
}
