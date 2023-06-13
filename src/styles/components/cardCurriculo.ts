import Link from 'next/link'
import { styled } from '..'

export const CardCurriculoContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '9.375rem',
  height: '9.375rem',

  borderRadius: 8,
  gap: '1rem',

  textDecoration: 'none',
  fontWeight: 'bold',
  color: '$white',

  background: '$gray700',

  transition: 'all 0.2s',

  svg: {
    color: '$purple600',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
