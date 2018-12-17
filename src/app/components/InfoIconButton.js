import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import ButtonBase from '@material-ui/core/ButtonBase'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '50%',
    width: 36,
    height: 36
  }
}))

function InfoIconButton (props) {
  const { alt, src, href, className, style } = props
  const classes = useStyles()
  const root = classnames(classes.root, className)

  return (
    <ButtonBase className={root} style={style} component="a" href={href}>
      <img alt={alt} src={src} />
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

export default InfoIconButton
