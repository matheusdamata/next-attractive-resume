import { styled } from '..'

export const ResumeSimulatorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  padding: '1rem',

  background: '$white',

  variants: {
    options: {
      simulator: {
        width: '31rem',
        height: '43.8125rem',
      },
      finished: {
        width: '210mm',
        height: '297mm',
      },
    },
  },
})

export const ResumeSimulatorHeader = styled('div', {
  display: 'flex',

  width: '100%',
})

export const ResumeSimulatorHeaderLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  variants: {
    options: {
      simulator: {
        h1: {
          fontSize: '1.25rem',
          color: '$purple600',
        },

        strong: {
          fontSize: '0.75rem',
          color: '$purple600',

          margin: '1rem 0 0',
        },

        p: {
          fontSize: '0.5rem',
          color: '$gray800',
        },
      },
      finished: {
        h1: {
          fontSize: '28px',
          color: '$purple600',
        },

        strong: {
          fontSize: '16px',
          color: '$purple600',

          margin: '1rem 0 0',
        },

        p: {
          fontSize: '14px',
          color: '$gray800',
        },
      },
    },
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
  },

  svg: {
    color: '$purple600',
  },

  variants: {
    options: {
      simulator: {
        div: {
          fontSize: '10px',
          fontWeight: 600,
          color: '$purple600',
        },
      },
      finished: {
        div: {
          fontSize: '14px',
          fontWeight: 600,
          color: '$purple600',
        },
      },
    },
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

  variants: {
    options: {
      simulator: {
        borderLeft: '3px solid $purple600',
      },
      finished: {
        borderLeft: '5px solid $purple600',
      },
    },
  },
})
