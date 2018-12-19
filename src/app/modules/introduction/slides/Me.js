import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next/hooks'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Title from '../components/Title'
import info from '../../../../info'

const useStyles = makeStyles(theme => ({
  padding: {
    padding: theme.spacing.unit
  },
  img: {
    background: `no-repeat center/cover url("${info.personAvatar}")`,
    minHeight: 360,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  text: {
    paddingBottom: theme.spacing.unit * 2
  }
}))

function Me (props) {
  const [t] = useTranslation()
  const classes = useStyles()
  return (
    <Grid container direction="column">
      <Title>{t('About Me')}</Title>
      <Grid className={classes.img} />
      <Typography className={classnames(classes.padding, classes.text)} variant="body1">{t(info.content)}</Typography>
    </Grid>
  )
}

export default Me
