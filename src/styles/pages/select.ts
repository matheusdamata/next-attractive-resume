import Link from 'next/link'
import { styled } from '..'

export const SelectContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '100%',
  height: '100vh',

  gap: '1rem',

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: '60px',
  },
})

export const SelectCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  gap: '1rem',
})

export const SelectCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  gap: '1rem',
})

export const SelectLinkBackToHome = styled(Link, {
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: '$purple600',
})
