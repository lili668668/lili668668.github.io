import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

function SpaceAroundFrame (props) {
  const { children, className, style } = props

  return (
    <Grid container direction="row" justify="space-around" alignItems="flex-end" className={className} style={style}>
      {children}
    </Grid>
  )
}

SpaceAroundFrame.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default SpaceAroundFrame
