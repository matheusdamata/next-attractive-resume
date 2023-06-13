import {
  ResumeSimulatorContainer,
  ResumeSimulatorHeader,
  ResumeSimulatorHeaderLeft,
  ResumeSimulatorHeaderRight,
} from '../../styles/components/resumeSimulator'

type ResumeSimulatorProps = {
  name: string
  bio: string
}

export function ResumeSimulator({ name, bio }: ResumeSimulatorProps) {
  return (
    <ResumeSimulatorContainer>
      <ResumeSimulatorHeader>
        <ResumeSimulatorHeaderLeft>
          <h1>{name.charAt(0).toUpperCase() + name.slice(1) || 'Seu nome'}</h1>
          <strong>Desenvolvedor Front-end Pleno</strong>
          <p>{bio || 'Sua biográfia...'}</p>
        </ResumeSimulatorHeaderLeft>
        <ResumeSimulatorHeaderRight></ResumeSimulatorHeaderRight>
      </ResumeSimulatorHeader>
    </ResumeSimulatorContainer>
  )
}
