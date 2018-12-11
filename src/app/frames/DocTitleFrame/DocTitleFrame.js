import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next/hooks'

function DocTitleFrame (props) {
  const { title } = props

  const [, i18n] = useTranslation()

  const info = lazy(() => import(`../../../infos/${i18n.language}.json`))

  const docTitle = title ? info.HTMLTitle : `${title} | ${info.HTMLTitle}`

  return (
    <Helmet>
      <title>{docTitle}</title>
    </Helmet>
  )
}

DocTitleFrame.PropTypes = {
  title: PropTypes.string
}

export default DocTitleFrame
