import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import PreviewIMG from '../../assets/images/preview-project.png'
import Column from '../Column'
import Screenshot from '.'

const screenshots = [
  { id: 0, to: '/0', name: 'Screenshot 1', path: PreviewIMG },
  { id: 1, to: '/1', name: 'Screenshot 1', path: PreviewIMG },
  { id: 2, to: '/2', name: 'Screenshot 1', path: PreviewIMG },
  { id: 3, to: '/3', name: 'Screenshot 1', path: PreviewIMG },
  { id: 4, to: '/4', name: 'Screenshot 1', path: PreviewIMG },
  { id: 5, to: '/5', name: 'Screenshot 1', path: PreviewIMG },
  { id: 6, to: '/6', name: 'Screenshot 1', path: PreviewIMG },
  { id: 7, to: '/7', name: 'Screenshot 1', path: PreviewIMG }
]

storiesOf('Components API/Data Display/Screenshot', module).add('Default', () => {
  const [screenshot, setScreenshot] = useState(screenshots[0])

  return (
    <Column style={{ width: 320 }}>
      <Screenshot
        index={screenshot.id}
        screenshot={screenshot}
        screenshots={screenshots}
        onClick={(path) => setScreenshot(screenshots.find((screenshot) => screenshot.to === path))}
      />
    </Column>
  )
})
