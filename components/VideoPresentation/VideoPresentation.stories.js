import React from 'react'
import { storiesOf } from '@storybook/react'

import VideoPresentation from '.'

storiesOf('Components API/Inputs/VideoPresentation', module).add('Default', () => {
  return <VideoPresentation videoId="528304755" type="vimeo" />
})
