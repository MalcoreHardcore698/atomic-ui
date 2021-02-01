import React, { useState } from 'react'
import styled from 'styled-components'

export const Figure = styled.figure`
  background-repeat: no-repeat;
  cursor: crosshair;

  &:hover img {
    opacity: 0;
  }
`

export const IMG = styled.img``

export const Image = ({ src, width, height, magnify, multiply, ...props }) => {
  const [state, setState] = useState({
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%'
  })

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100

    setState((prev) => ({ ...prev, backgroundSize: `${100 * multiply}%`, backgroundPosition: `${x}% ${y}%` }))
  }

  const handleMouseLeave = () => {
    setState((prev) => ({ ...prev, backgroundSize: '100%' }))
  }

  return (
    magnify ? (
      <Figure
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...state, width, height }}
      >
        <IMG {...props} src={src} style={{ width, height }} />
      </Figure>
    ) : (
      <IMG {...props} src={src} style={{ width, height }} />
    )
  )
}

Image.defaultProps = {
  multiply: 3
}

export default Image
