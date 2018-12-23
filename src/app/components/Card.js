import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginTop: 180,
    marginBottom: 180,
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2]
  }
})

function Card (props) {
  const { children, classes, className, style } = props
  const root = classnames(classes.root, className)

  return (
    <section className={root} style={style}>
      {children}
    </section>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default withStyles(styles)(Card)
