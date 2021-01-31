import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

import IconIdea from '../../assets/images/heads/idea.svg'
import IconArrow from '../../assets/images/icons/arrow_right_circle.svg'
import Column from '../Column'
import Card from '.'

storiesOf('Components API/Data Display/Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const group = 'Default Card'

    const colors = {
      Blue: 'sea',
      Orange: 'orange',
      Green: 'green',
      Purple: 'purple',
      Red: 'red',
      Pink: 'pink'
    }

    return (
      <Column>
        <Card
          text={text(
            'Text',
            'Уникальные архитектурные решения (капитального ремонта, реконструкции, нового строительства, «приспособления»)',
            group
          )}
          color={select('Color', colors, 'blue', group)}
          extras={IconIdea}
        />
      </Column>
    )
  })
  .add('Solid', () => {
    const numberGroup = 'Solid Card with number extras'
    const iconGroup = 'Solid Card with icon extras'

    const colors = {
      Blue: 'blue',
      Orange: 'orange',
      Green: 'green',
      Purple: 'purple',
      Red: 'red',
      Pink: 'pink'
    }

    return (
      <Column>
        <Card
          text={text('Text', 'Здесь авторы презентуют свои проекты', numberGroup)}
          color={select('Color', colors, 'blue', numberGroup)}
          extras={number('Extras (number)', 1, {}, numberGroup)}
          type={'solid'}
        />

        <Card
          text={text('Text', 'Здесь авторы презентуют свои проекты', iconGroup)}
          color={select('Color', colors, 'blue', iconGroup)}
          extras={<IconArrow />}
          type={'solid'}
        />
      </Column>
    )
  })
