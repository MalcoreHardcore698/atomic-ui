import React from 'react'
import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 800;
`

export const H2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
`

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
`

export const H4 = styled.h4`
  font-size: 18px;
  font-weight: 600;
`

export const H5 = styled.h5`
  font-size: 14px;
  font-weight: 500;
`

export const H6 = styled.h6`
  font-size: 10px;
  font-weight: 500;
`

export const Headline = ({ tag = 'h1', children, ...props }) => {
  const tagList = [
    { name: 'h1', component: H1 },
    { name: 'h2', component: H2 },
    { name: 'h3', component: H3 },
    { name: 'h4', component: H4 },
    { name: 'h5', component: H5 },
    { name: 'h6', component: H6 }
  ]

  for (let tagItem of tagList) {
    if (tagItem.name === tag) {
      const Component = tagItem.component
      return <Component {...props}>{children}</Component>
    }
  }

  return null
}

export const Title = ({ tag, children, ...props }) => {
  return (
    <Headline {...props} tag={tag}>
      {children}
    </Headline>
  )
}

export default Title
