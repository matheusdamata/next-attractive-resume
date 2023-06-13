import { styled } from '..'

export const ResumeSimulatorContainer = styled('div', {
  display: 'flex',

  width: '400px',
  height: 'calc(100vh - 7rem)',

  padding: '2rem 1rem',

  background: '$white',
})

export const ResumeSimulatorHeader = styled('div', {
  display: 'flex',
})

export const ResumeSimulatorHeaderLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '1.125rem',
    color: '$purple600',
  },

  strong: {
    fontSize: '0.625rem',
    color: '$purple600',

    margin: '1rem 0 0',
  },

  p: {
    fontSize: '0.625rem',
    color: '$gray800',
  },
})

export const ResumeSimulatorHeaderRight = styled('div', {
  display: 'flex',
})
