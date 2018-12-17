import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

function FrameOfCard (props) {
  const { children, className, style } = props

  return (
    <Grid container>
      <Grid item xs />
      <Grid item xs={8} sm={4} className={className} style={style}>
        {children}
      </Grid>
      <Grid item xs />
    </Grid>
  )
}

FrameOfCard.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default FrameOfCard
