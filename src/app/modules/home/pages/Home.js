import React from 'react'
import { useTranslation } from 'react-i18next/hooks'
import CardFrame from '../../../plugins/CardFrame'
import AvatarFrame from '../../../plugins/AvatarFrame'
import NameBand from '../../../plugins/NameBand'
import InfoIconsBand from '../../../plugins/InfoIconsBand'
import InfoIcon from '../../../plugins/InfoIcon'
import Avatar from '../components/Avatar'
import info from '../../../../info'

function HomePage (props) {
  const [t] = useTranslation()
  return (
    <CardFrame>
      <AvatarFrame alt={t(info.nickname)} src={info.avatar} avatarComponent={Avatar} />
      <NameBand name={t(info.name)} nickname={t(info.nickname)} />
      <InfoIconsBand>
        <InfoIcon name={t('company')} alt={t(info.company)} src={info.companyIcon} href="#" tooltip={t(info.company)} />
        <InfoIcon name={t('github')} alt={info.githubAccount} src={info.githubIcon} href={info.github} tooltip={info.githubAccount} />
        <InfoIcon name={t('facebook')} alt={info.facebookAccount} src={info.facebookIcon} href={info.facebook} tooltip={info.facebookAccount} />
        <InfoIcon name={t('gmail')} alt={info.gmail} src={info.gmailIcon} href={`mailTo:${info.gmail}`} tooltip={info.gmail} />
      </InfoIconsBand>
    </CardFrame>
  )
}

export default HomePage
