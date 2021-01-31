import React from 'react'
import { storiesOf } from '@storybook/react'

import PreviewIMG from '../../assets/images/preview-article.jpg'
import AvatarIMG from '../../assets/images/avatar.png'
import Table, { Cell } from '.'

storiesOf('Components API/Data Display/Table', module).add('Default', () => (
  <Table
    data={new Array(10).fill({
      preview: PreviewIMG,
      title: 'Новый энергетический объект округа Кэрролл',
      body:
        'Bechtel отвечал за проектирование, закупки, строительство, запуск и ввод в эксплуатацию нового газового парогазового комплекса мощностью 700 мегаватт в Огайо, США и ввод в эксплуатацию нового газового парогазового комплекса мощностью 700 мегаватт в Огайо, США',
      category: 'Строительство',
      author: {
        name: 'Анна',
        avatar: AvatarIMG
      },
      publishedAt: '28.11.2020',
      createdAt: '26.11.2020'
    })}
    template={[
      {
        header: 'Наименование',
        content: (item) => <Cell img={item.preview} text={item.title} />
      },
      {
        header: 'Описание',
        content: (item) => <Cell text={item.body} />
      },
      {
        header: 'Раздел',
        content: (item) => <Cell text={item.category} />
      },
      {
        header: 'Автор',
        content: (item) => <Cell img={item.author.avatar} text={item.author.name} />
      },
      {
        header: 'Дата публикации',
        content: (item) => <Cell text={item.publishedAt} />
      },
      {
        header: 'Дата создания',
        content: (item) => <Cell text={item.createdAt} />,
        hidden: true
      }
    ]}
    onChecked={() => {}}
    onDelete={() => {}}
    onEdit={() => {}}
  />
))
