import { BookOpenText, BookOpen } from '@phosphor-icons/react'
import { CardCurriculoContainer } from '../../styles/components/cardCurriculo'
import { CardCurriculoProps } from '../../types/componentsGlobal'

export function CardCurriculo({ icon, text }: CardCurriculoProps) {
  function handleIconCardCurriculo(icon: string) {
    switch (icon) {
      case 'card-curriculo':
        return <BookOpenText size={48} />
      case 'card-curriculo-enxuto':
        return <BookOpen size={48} />
    }
  }

  return (
    <CardCurriculoContainer href="/dados">
      {handleIconCardCurriculo(icon)}
      <span>{text}</span>
    </CardCurriculoContainer>
  )
}
