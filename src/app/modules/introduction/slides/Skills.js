import React, { useState } from 'react'
import { useTranslation } from 'react-i18next/hooks'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Title from '../components/Title'
import Group from '../components/Group'
import info from '../../../../info'

function Skills (props) {
  const [t] = useTranslation()
  const [tab, setTab] = useState(0)
  const { items } = info.skillGroups[tab]
  return (
    <Grid container direction="column">
      <Title>{t('Skill Tree')}</Title>
      <Tabs value={tab} onChange={(event, value) => setTab(value)} fullWidth>
        {
          info.skillGroups.map(({title}) => (<Tab key={title} label={t(title)} />))
        }
      </Tabs>
      <Group items={items} />
    </Grid>
  )
}

export default Skills
