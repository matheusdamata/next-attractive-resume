import { styled } from '..'

export const ResumeSimulatorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '496px',
  height: '701px',

  padding: '1rem',

  background: '$white',
})

export const ResumeSimulatorHeader = styled('div', {
  display: 'flex',

  width: '100%',
})

export const ResumeSimulatorHeaderLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

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
  flexDirection: 'column',

  width: '100%',

  padding: '0 0 0 0.5rem',
  gap: '0.25rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '0.5rem',

    fontSize: '0.625rem',
    fontWeight: 600,
    color: '$purple600',
  },

  svg: {
    color: '$purple600',
  },
})

export const ResumeSimulatorBody = styled('div', {
  display: 'flex',

  width: '100%',
  height: '100%',

  margin: '50px 0 0',
})

export const ResumeSimulatorBodyLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  gap: '0.25rem',
})

export const ResumeSimulatorBodyRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  height: '100%',

  borderLeft: '3px solid $purple600',

  gap: '0.25rem',
})
