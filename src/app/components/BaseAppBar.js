import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AppBar from './AppBar'
import ToolbarIconButton from '../plugins/ToolbarIconButton'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  }
}))

function BaseAppBar (props) {
  const classes = useStyles()
  return (
    <AppBar>
      <div className={classes.grow} />
      <ToolbarIconButton icon={AccountCircleIcon} tooltip='簡介' onClick={() => {}} />
    </AppBar>
  )
}

export default BaseAppBar
