import { styled } from '..'

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: '70rem',
  height: '5rem',

  borderBottom: '1px solid $gray700',

  strong: {
    fontSize: '2rem',
  },

  nav: {
    display: 'flex',

    gap: '2rem',

    a: {
      color: '$white',
    },
  },
})
