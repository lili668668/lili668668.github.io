import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.grey[500],
    bottom: 0,
    position: 'fixed',
    width: '100%',
    height: 51,
    color: 'white',
    paddingLeft: theme.spacing.unit
  }
}))

function Footer (props) {
  const { children, className, style } = props
  const classes = useStyles()
  const root = classnames(classes.root, className)

  return (
    <footer className={root} style={style}>
      <p>{children}</p>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Footer
