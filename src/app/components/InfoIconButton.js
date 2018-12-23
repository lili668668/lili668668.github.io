import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'

const styles = theme => ({
  root: {
    borderRadius: '50%',
    width: 36,
    height: 36
  }
})

function InfoIconButton (props) {
  const { classes, alt, src, href, className, style } = props
  const root = classnames(classes.root, className)

  return (
    <ButtonBase className={root} style={style} component="a" href={href}>
      <img className={root} style={style} alt={alt} src={src} />
    </ButtonBase>
  )
}

InfoIconButton.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default withStyles(styles)(InfoIconButton)
