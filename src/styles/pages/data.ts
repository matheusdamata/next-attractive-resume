import Link from 'next/link'
import { styled } from '..'

export const DataContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

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
  height: '40px',

  gap: '0.5rem',

  fontSize: '14px',
  fontWeight: 'bold',
  color: '$white',

  background: '$purple600',
})

export const DataLink = styled(Link, {
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: '$purple600',
})
