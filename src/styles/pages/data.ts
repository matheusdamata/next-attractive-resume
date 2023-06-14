import { styled } from '..'

export const DataContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '100%',
  height: '100vh',

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: '60px',
  },
})

export const DataContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  padding: '1rem',
  gap: '3rem',
})

export const DataSideLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '21.875rem',
})

export const DataSideLeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: '28.125rem',
  height: '100%',

  gap: '1rem',
})

export const DataInputContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  gap: '0.5rem',

  input: {
    width: '100%',

    borderRadius: 8,
    padding: '0.5rem 1rem',

    color: '$gray300',

    background: '$gray700',

    '&::placeholder': {
      color: '$gray500',
    },
  },

  textarea: {
    borderRadius: 8,

    padding: '0.5rem 1rem',

    color: '$gray500',

    background: '$gray700',

    '&::placeholder': {
      color: '$gray500',
    },
  },
})

export const DataButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '200px',

  gap: '0.5rem',

  variants: {
    options: {
      withBackground: {
        height: '40px',

        fontSize: '14px',
        fontWeight: 'bold',
        color: '$white',

        background: '$purple600',
      },
      withEdge: {
        height: '20px',

        fontSize: '14px',
        fontWeight: 400,
        color: '$purple600',

        background: 'transparent',
      },
    },
  },
})
