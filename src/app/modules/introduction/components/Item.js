import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next/hooks'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  padding: {
    padding: theme.spacing.unit
  }
})

function Item (props) {
  const [t] = useTranslation()
  const { classes, title, description } = props

  return (
    <section className={classes.padding}>
      <Typography variant="h6">{t(title)}</Typography>
      <Typography className={classes.padding} variant="body2">{t(description)}</Typography>
    </section>
  )
}

export default withStyles(styles)(Item)
