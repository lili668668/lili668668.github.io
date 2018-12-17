import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

function FrameOfInfoIcon (props) {
  const { children, className, style } = props

  return (
    <Grid container item xs direction="column" alignItems="center" className={className} style={style}>
      {children}
    </Grid>
  )
}

FrameOfInfoIcon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default FrameOfInfoIcon
