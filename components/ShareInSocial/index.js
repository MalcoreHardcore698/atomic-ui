import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  OKIcon,
  OKShareButton,
  TelegramIcon,
  TelegramShareButton,
  VKIcon,
  VKShareButton
} from 'react-share'
import styled from 'styled-components'

import Row from '../Row'

export const Wrap = styled(Row)`
  grid-gap: 10px;
`

export const ShareInSocial = ({ title, url }) => {
  return (
    <Wrap>
      <FacebookShareButton title={title} url={url}>
        <FacebookIcon size={'2rem'} round />
      </FacebookShareButton>
      <VKShareButton title={title} url={url} windowWidth={660} windowHeight={460}>
        <VKIcon size={'2rem'} round />
      </VKShareButton>
      <OKShareButton title={title} url={url}>
        <OKIcon size={'2rem'} round />
      </OKShareButton>
      <TelegramShareButton title={title} url={url}>
        <TelegramIcon size={'2rem'} round />
      </TelegramShareButton>
    </Wrap>
  )
}

export default ShareInSocial
