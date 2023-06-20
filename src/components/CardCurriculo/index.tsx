import { BookOpenText, BookOpen } from '@phosphor-icons/react'
import {
  CardCurriculoContainer,
  CardCurriculoDisabled,
} from '../../styles/components/cardCurriculo'
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
    <CardCurriculoContainer
      href={text === 'Essencial' ? '/dados' : '/selecione'}
      disabled={text === 'Enxuto' ? true : undefined}
    >
      {handleIconCardCurriculo(icon)}
      <span>{text}</span>

      {text === 'Enxuto' ? (
        <CardCurriculoDisabled>Em breve</CardCurriculoDisabled>
      ) : null}
    </CardCurriculoContainer>
  )
}
