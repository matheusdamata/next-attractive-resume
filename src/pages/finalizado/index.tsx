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
      name={data?.name || 'Matheus Silva'}
      office={data?.office || 'Front-end'}
      bio={
        data?.bio ||
        'Desenvolvedor freelancer desde 2022, realizo projetos em Next.JS e React.JS'
      }
      linkedin={
        data?.linkedin || 'https://www.linkedin.com/in/matheus-silva-3875b1166/'
      }
      github={data?.github || 'https://github.com/matheusdamata'}
      website={data?.website || 'www.matheusdamatag.com.br'}
      option="finished"
    />
  )
}
