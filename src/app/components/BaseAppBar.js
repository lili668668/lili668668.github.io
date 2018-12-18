import React from 'react'
import { useTranslation } from 'react-i18next/hooks'
import { makeStyles } from '@material-ui/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CodeIcon from '@material-ui/icons/Code'
import info from '../../info'
import AppBar from './AppBar'
import ToolbarIconButton from '../plugins/ToolbarIconButton'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  }
}))

function BaseAppBar (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  return (
    <AppBar>
      <div className={classes.grow} />
      <ToolbarIconButton icon={AccountCircleIcon} tooltip={t('introduction')} onClick={() => {}} />
      <ToolbarIconButton icon={CodeIcon} tooltip={t('GitHub Repo')} onClick={() => {
        window.location = info.repo
      }} />
    </AppBar>
  )
}

export default BaseAppBar
