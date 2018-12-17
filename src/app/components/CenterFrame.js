import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

function CenterFrame (props) {
  const { children, className, style } = props

  return (
    <Grid container direction="row" justify="center" alignItems="flex-end" className={className} style={style}>
      {children}
    </Grid>
  )
}

CenterFrame.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default CenterFrame
