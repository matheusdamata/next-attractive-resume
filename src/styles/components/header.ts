import { styled } from '..'

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: '1120px',
  height: '5rem',

  borderBottom: '1px solid $gray700',

  strong: {
    fontSize: '2rem',
  },

  nav: {
    display: 'flex',

    gap: '1rem',

    a: {
      color: '$white',
    },
  },
})
