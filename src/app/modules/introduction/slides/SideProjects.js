import React, { useState } from 'react'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next/hooks'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Title from '../components/Title'
import info from '../../../../info'

const useStyles = makeStyles(theme => {
  const style = {
    padding: {
      padding: theme.spacing.unit
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    },
    text: {
      paddingBottom: theme.spacing.unit * 2
    }
  }
  info.apps
    .forEach(app => {
      style[app.name] = {
        background: `no-repeat center/contain url("${app.icon}")`,
        minHeight: 200,
        margin: theme.spacing.unit,
      }
    })
  return style
})

function SideProjects (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  const [tab, setTab] = useState(0)
  const app = info.apps[tab]
  return (
    <Grid container direction="column">
      <Title>{t('Side Projects')}</Title>
      <Tabs value={tab} onChange={(event, value) => setTab(value)} fullWidth>
        {
          info.apps.map(({name}) => (<Tab key={name} label={t(name)} />))
        }
      </Tabs>
      <Grid className={classes[app.name]} />
      <Typography className={classes.padding} variant="h6"><a className={classes.link} href={app.link}>{app.link}</a></Typography>
      <Typography className={classnames(classes.padding, classes.text)} variant="body1">{t(app.description)}</Typography>
    </Grid>
  )
}

export default SideProjects
