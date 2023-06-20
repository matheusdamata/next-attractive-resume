import ResumeSimulator from '../../components/ResumeSimulator'

type FinishedType = {
  name: string
  office: string
  bio: string
  linkedin: string
  github: string
  website: string
}

type FinishedProps = {
  data: FinishedType
}

export default function Finalizado({ data }: FinishedProps) {
  return (
    <ResumeSimulator
      name={data?.name || 'Matheus'}
      office={data?.office || 'Matheus'}
      bio={data?.bio || 'Matheus'}
      linkedin={data?.linkedin || 'Matheus'}
      github={data?.github || 'Matheus'}
      website={data?.website || 'Matheus'}
    />
  )
}
