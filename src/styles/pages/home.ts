import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '100%',
  height: '100vh',

  gap: '2rem',

  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    width: '100%',
    maxWidth: '40.625rem',

    gap: '2rem',

    strong: {
      fontSize: '1.25rem',
    },

    h1: {
      fontSize: '2.5rem',
      lineHeight: '2.5rem',

      span: {
        color: '$purple600',
      },
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '12rem',
      height: '2.5rem',

      borderRadius: 8,

      textDecoration: 'none',
      fontWeight: 'bold',
      color: '$white',

      // margin: '1rem 0 0',

      background: '$purple600',

      transition: 'opacity 0.2s ease-out',

      '&:hover': {
        opacity: 0.8,
      },
    },
  },
})

export const HomeAlertBoxContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HomeAlertBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '40.625rem',

  border: '2px dashed rgba(161, 0, 237, 0.35)',
  borderRadius: 12,
  padding: '1.5rem',

  background: 'rgba(161, 0, 237, 0.05)',

  p: {
    fontSize: '0.875rem',
    color: '$gray300',
  },

  b: {
    fontSize: '0.875rem',
    color: '$purple600',
  },
})
