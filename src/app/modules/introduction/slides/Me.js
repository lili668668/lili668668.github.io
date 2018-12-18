import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next/hooks'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import info from '../../../../info'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400
  },
  padding: {
    padding: theme.spacing.unit
  }
}))

function Me (props) {
  const [t] = useTranslation()
  const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.root}>
      <Typography className={classes.padding} variant="h4">{t('About Me')}</Typography>
      <img className={classes.padding} alt={t(info.name)} src={info.personAvatar} width={360} />
      <Typography className={classes.padding} variant="body1">{t(info.content)}</Typography>
    </Grid>
  )
}

export default Me
