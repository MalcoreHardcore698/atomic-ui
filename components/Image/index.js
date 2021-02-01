import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);
  cursor: crosshair;
`

export const Magnify = styled.div`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-12);
  border-radius: var(--surface-border-radius);

  ${({ portal, scale }) =>
    portal &&
    css`
      top: calc(-${100 + (25 * scale)}% - 15px);
      border: var(--surface-border);
      box-shadow: var(--default-shadow);
      transform: scale(${scale})
    `}
`

export const Source = styled.img`
  overflow: hidden;
  border-radius: var(--surface-border-radius);
`

export const Image = ({ src, width, height, portal, magnify, scale, multiply, ...props }) => {
  const [state, setState] = useState({
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%',
    display: 'none'
  })
  const [opacity, setOpacity] = useState(1)

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100

    setOpacity(0)
    setState((prev) => ({
      ...prev,
      backgroundSize: `${100 * multiply}%`,
      backgroundPosition: `${x}% ${y}%`,
      display: 'flex'
    }))
  }

  const handleMouseLeave = () => {
    setOpacity(1)
    setState((prev) => ({
      ...prev,
      backgroundPosition: '0% 0%',
      backgroundSize: '100%',
      display: 'none'
    }))
  }

  return (
    magnify ? (
      <Wrap
        style={{ width, height }}
        onMouseMove={!portal && handleMouseMove}
        onMouseLeave={!portal && handleMouseLeave}
      >
        <Magnify
          {...props}
          style={{...state, width, height }}
          portal={portal}
          scale={scale}
        />
        <Source
          {...props}
          src={src}
          onMouseMove={portal && handleMouseMove}
          onMouseLeave={portal && handleMouseLeave}
          style={{ width, height, opacity }}
        />
      </Wrap>
    ) : (
      <Source {...props} src={src} style={{ width, height }} />
    )
  )
}

Image.defaultProps = {
  multiply: 3,
  scale: 2
}

export default Image
