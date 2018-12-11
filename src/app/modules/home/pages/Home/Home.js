import React from 'react'
import { useTranslation } from 'react-i18next/hooks'
import HomePage from './HomePage'
import DocTitleFrame from '../../../../frames/DocTitleFrame'
import CardFrame from '../../../../frames/CardFrame'

function Home (props) {
  const [t] = useTranslation('home')

  return (
    <React.Fragment>
      <DocTitleFrame title={t('card')} />
      <CardFrame>
        <HomePage />
      </CardFrame>
    </React.Fragment>
  )
}

export default Home
