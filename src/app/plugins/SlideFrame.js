import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import LeftIcon from '@material-ui/icons/ChevronLeft'
import RightIcon from '@material-ui/icons/ChevronRight'

import compose from '../utils/compose'
import SlideFrameBase from '../components/SlideFrameBase'
import CardFrame from './CardFrame'

const useButtonStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
  }
}))

const ChangeSlideButton = (Icon) => (props) => {
  const classes = useButtonStyles()
  const { className, onClick } = props
  return (
    <div className={className}>
      <Fab size="small" className={classes.root} onClick={onClick}>
        <Icon />
      </Fab>
    </div>
  )
}

ChangeSlideButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default compose({ Frame: CardFrame, PrevButton: ChangeSlideButton(LeftIcon), NextButton: ChangeSlideButton(RightIcon) })(SlideFrameBase)
