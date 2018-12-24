import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import LeftIcon from '@material-ui/icons/ChevronLeft'
import RightIcon from '@material-ui/icons/ChevronRight'

import compose from '../utils/compose'
import SlideFrameBase from '../templates/SlideFrameBase'
import CardFrame from './CardFrame'

const buttonStyles = theme => ({
  root: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
  },
  leftButton: {
    zIndex: theme.zIndex.mobileStepper,
    position: 'relative',
    left: -20
  },
  rightButton: {
    zIndex: theme.zIndex.mobileStepper,
    position: 'relative',
    right: -20
  }
})

const ChangeSlideButton = (position) => {
  const icon = () => {
    if (position === 'left') return LeftIcon
    if (position === 'right') return RightIcon
  }
  const css = (classes) => {
    if (position === 'left') return classes.leftButton
    if (position === 'right') return classes.rightButton
  }
  const ButtonBase = (props) => {
    const { classes, className, onClick } = props
    const Icon = icon()
    const buttonCss = css(classes)
    return (
      <div className={className}>
        <Fab size="small" className={classnames(classes.root, buttonCss)} onClick={onClick}>
          <Icon />
        </Fab>
      </div>
    )
  }
  return withStyles(buttonStyles)(ButtonBase)
}

ChangeSlideButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default compose({ Frame: CardFrame, PrevButton: ChangeSlideButton('left'), NextButton: ChangeSlideButton('right') })(SlideFrameBase)
