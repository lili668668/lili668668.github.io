import React from 'react'
import { useTranslation } from 'react-i18next/hooks'
import CardFrame from '../../components/CardFrame'
import AvatarBand from '../../../plugins/AvatarBand'
import NameBand from '../../../plugins/NameBand'
import InfoIconsBand from '../../../plugins/InfoIconsBand'
import InfoIcon from '../../../plugins/InfoIcon'
import TitlesBand from '../../../plugins/TitlesBand'
import Avatar from '../components/Avatar'
import AvatarButton from '../../../components/AvatarButton'
import info from '../../../../info'

function Home (props) {
  const [t] = useTranslation()
  const titles = info.titles.map(title => t(title))
  return (
    <CardFrame>
      <AvatarBand alt={t(info.nickname)} src={info.avatar} avatarComponent={Avatar} />
      <NameBand name={t(info.name)} nickname={t(info.nickname)} />
      <TitlesBand titles={titles} />
      <InfoIconsBand>
        <InfoIcon name={t('gmail')} alt={info.gmail} src={info.gmailIcon} href={`mailTo:${info.gmail}`} tooltip={info.gmail} />
        <InfoIcon name={t('github')} alt={info.githubAccount} src={info.githubIcon} href={info.github} tooltip={info.githubAccount} />
        <InfoIcon name={t('facebook')} alt={info.facebookAccount} src={info.facebookIcon} href={info.facebook} tooltip={info.facebookAccount} />
        <InfoIcon name={t('plurk')} alt={info.plurkAccount} src={info.plurkIcon} href={info.plurk} tooltip={info.plurkAccount} />
        <InfoIcon name={t('medium')} alt={info.mediumAccount} src="M" href={info.medium} tooltip={info.mediumAccount} iconComponent={AvatarButton} />
      </InfoIconsBand>
    </CardFrame>
  )
}

export default Home
