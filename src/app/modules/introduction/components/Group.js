import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next/hooks'
import Typography from '@material-ui/core/Typography'
import Item from './Item'

const useStyles = makeStyles(theme => ({
  padding: {
    padding: theme.spacing.unit
  }
}))

function Group (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  const { items } = props

  return (
    <section className={classes.padding}>
      {
        items.map(({ title, description }, index) => (<Item key={index} title={title} description={description} />))
      }
    </section>
  )
}

export default Group
