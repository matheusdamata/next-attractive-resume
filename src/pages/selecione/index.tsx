import { CardCurriculo } from '../../components/CardCurriculo'
import { StepOptions } from '../../components/StepOptions'
import {
  SelectCardContainer,
  SelectCardContent,
  SelectContainer,
  SelectLinkBackToHome,
} from '../../styles/pages/select'

import { optionsResume } from '../../data/constants'

export default function Selecione() {
  return (
    <SelectContainer>
      <SelectCardContainer>
        <h2>Seleciona uma opção</h2>

        <SelectCardContent>
          {optionsResume.map((options) => (
            <CardCurriculo
              key={options.text}
              icon={options.icon as any}
              text={options.text}
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
