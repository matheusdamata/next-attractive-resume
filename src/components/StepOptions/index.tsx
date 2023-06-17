import {
  StepOptionsContainer,
  StepOptionsCircle,
  StepOptionsContent,
} from '../../styles/components/stepOptions'
import { StepOptionsProps } from '../../types/componentsGlobal'

export function StepOptions({ options }: StepOptionsProps) {
  function renderingOptions(options: number) {
    switch (options) {
      case 1:
        return (
          <StepOptionsContent>
            <StepOptionsCircle active="true" />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
          </StepOptionsContent>
        )
      case 2:
        return (
          <StepOptionsContent>
            <StepOptionsCircle />
            <StepOptionsCircle active="true" />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
          </StepOptionsContent>
        )
      case 3:
        return (
          <StepOptionsContent>
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle active="true" />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
          </StepOptionsContent>
        )
      case 4:
        return (
          <StepOptionsContent>
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle active="true" />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
          </StepOptionsContent>
        )
      case 5:
        return (
          <StepOptionsContent>
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle active="true" />
            <StepOptionsCircle />
            <StepOptionsCircle />
          </StepOptionsContent>
        )
      case 6:
        return (
          <StepOptionsContent>
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle active="true" />
            <StepOptionsCircle />
          </StepOptionsContent>
        )
      case 7:
        return (
          <StepOptionsContent>
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle />
            <StepOptionsCircle active="true" />
          </StepOptionsContent>
        )
    }
  }

  return (
    <StepOptionsContainer>{renderingOptions(options)}</StepOptionsContainer>
  )
}
