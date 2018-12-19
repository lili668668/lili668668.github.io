import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next/hooks'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  padding: {
    padding: theme.spacing.unit
  }
}))

function Skill (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  const { title, description } = props

  return (
    <section className={classes.padding}>
      <Typography variant="h6">{t(title)}</Typography>
      <Typography className={classes.padding} variant="body2">{t(description)}</Typography>
    </section>
  )
}

export default Skill
