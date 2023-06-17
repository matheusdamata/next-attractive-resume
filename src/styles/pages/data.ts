import { styled } from '..'

export const DataContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
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
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: '1120px',
  height: '100%',

  padding: '1rem',
  gap: '3rem',
})

export const DataSideLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '450px',
})

export const DataSideLeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',

  width: '100%',
  maxWidth: '450px',
  height: '100%',

  gap: '1rem',
})

export const DataInputContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  gap: '0.75rem',

  input: {
    width: '100%',
    height: '3.5rem',

    borderRadius: 10,
    padding: '0 1rem',

    color: '$gray300',

    background: '$gray700',

    '&::placeholder': {
      color: '$gray500',
    },
  },

  textarea: {
    borderRadius: 8,

    padding: '0.5rem 1rem',

    color: '$gray300',

    background: '$gray700',

    '&::placeholder': {
      color: '$gray500',
    },
  },
})

export const DataButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '100%',

  gap: '1rem',
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
