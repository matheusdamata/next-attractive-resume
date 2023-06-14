import { CardCurriculo } from '../../components/CardCurriculo'
import { StepOptions } from '../../components/StepOptions'
import {
  SelectCardContainer,
  SelectCardContent,
  SelectContainer,
  SelectLinkBackToHome,
} from '../../styles/pages/select'

import { cardConst } from './constants'

export default function Selecione() {
  return (
    <SelectContainer>
      <SelectCardContainer>
        <h2>Seleciona uma opção</h2>

        <SelectCardContent>
          {cardConst.map((card) => (
            <CardCurriculo
              key={card.text}
              icon={card.icon as any}
              text={card.text}
            />
          ))}
        </SelectCardContent>

        <SelectLinkBackToHome href="/">Voltar para Home</SelectLinkBackToHome>
      </SelectCardContainer>

      <footer>
        <StepOptions options={1} />
      </footer>
    </SelectContainer>
  )
}
