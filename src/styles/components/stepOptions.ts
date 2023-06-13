import { styled } from '..'

export const StepOptionsContainer = styled('div', {
  display: 'flex',
})

export const StepOptionsContent = styled('div', {
  display: 'flex',

  gap: '0.5rem',
})

export const StepOptionsCircle = styled('div', {
  display: 'flex',

  width: '0.5rem',
  height: '0.5rem',

  borderRadius: '0.5rem',

  background: '$gray700',

  variants: {
    active: {
      true: {
        background: '$purple600',
      },
    },
  },
})
