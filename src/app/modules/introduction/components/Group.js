import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Item from './Item'

const styles = theme => ({
  padding: {
    padding: theme.spacing.unit
  }
})

function Group (props) {
  const { classes } = props
  const { items } = props

  return (
    <section className={classes.padding}>
      {
        items.map(({ title, description }, index) => (<Item key={index} title={title} description={description} />))
      }
    </section>
  )
}

export default withStyles(styles)(Group)
