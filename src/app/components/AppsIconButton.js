import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit
  },
  img: {
    width: 64,
    height: 64,
    padding: theme.spacing.unit
  }
}))

function AppsIconButton (props) {
  const { name, alt, src, href, className, style } = props
  const classes = useStyles()
  const root = classnames(classes.root, className)

  return (
    <div className={root} style={style} >
      <ButtonBase component="a" href={href}>
        <Grid container direction="column" alignItems="center">
          <img className={classes.img} style={style} alt={alt} src={src} />
          <Typography>{name}</Typography>
        </Grid>
      </ButtonBase>
    </div>
  )
}

AppsIconButton.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default AppsIconButton
