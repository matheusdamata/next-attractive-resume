import { styled } from '..'

export const SignInButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',

  height: '3rem',

  borderRadius: '3rem',
  padding: '0 1rem',
  gap: '0.5rem',

  fontWeight: 'bold',
  color: '$gray200',

  background: '$gray800',

  svg: {
    color: '$purple600',
  },
})
