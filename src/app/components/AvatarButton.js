import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '50%',
    width: 36,
    height: 36,
    background: grey[400],
    color: 'white',
    fontWeight: 'bold'
  }
}))

function AvatarButton (props) {
  const { src, href, className, style } = props
  const classes = useStyles()
  const root = classnames(classes.root, className)

  return (
    <ButtonBase className={root} style={style} component="a" href={href}>
      <section>{src}</section>
    </ButtonBase>
  )
}

AvatarButton.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default AvatarButton
