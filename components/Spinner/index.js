import React from 'react'

/*
 * IMPORTANT: Don't use styled-components,
 * because it will cause problems at the build stage
 */

export const styles = {
  display: 'inline-block',
  margin: 'auto',
  fontSize: '10px',
  position: 'relative',
  textIndent: '-9999em',
  border: '0.2em solid rgba(0, 0, 0, 0.2)',
  borderLeft: '0.2em solid var(--default-color-accent)',
  borderRadius: '50%',
  width: '3em',
  height: '3em',
  transform: 'translateZ(0)',
  animation: 'load 450ms infinite linear',

  '&::after': {
    borderRadius: '50%',
    width: '3em',
    height: '3em'
  },

  '@keyframes load': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}

export default () => <div style={styles} />
