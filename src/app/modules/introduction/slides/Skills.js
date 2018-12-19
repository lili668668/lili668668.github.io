import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next/hooks'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Title from '../components/Title'
import SkillGroup from '../components/SkillGroup'
import info from '../../../../info'

const useStyles = makeStyles(theme => ({
  padding: {
    padding: theme.spacing.unit
  }
}))

function Me (props) {
  const [t] = useTranslation()
  const classes = useStyles()
  const [tab, setTab] = useState(0)
  const { skillTitle, skills } = info.skillGroups[tab]
  return (
    <Grid container direction="column">
      <Title>{t('Skill Tree')}</Title>
      <Tabs value={tab} onChange={(event, value) => setTab(value)}>
        {
          info.skillGroups.map(({title}) => (<Tab key={title} label={t(title)} />))
        }
      </Tabs>
      <SkillGroup title={skillTitle} skills={skills} />
    </Grid>
  )
}

export default Me
