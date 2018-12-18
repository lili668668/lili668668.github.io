import React from 'react'
import { withRouter } from "react-router"
import { useTranslation } from 'react-i18next/hooks'
import { makeStyles } from '@material-ui/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CodeIcon from '@material-ui/icons/Code'
import info from '../../../info'
import AppBarBase from '../../components/AppBar'
import ToolbarIconButton from '../../plugins/ToolbarIconButton'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  }
}))

function AppBar (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  const { history } = props
  return (
    <AppBarBase>
      <div className={classes.grow} />
      <ToolbarIconButton icon={AccountCircleIcon} tooltip={t('introduction')} onClick={() => {
        history.push('/introduction/me')
      }} />
      <ToolbarIconButton icon={CodeIcon} tooltip={t('GitHub Repo')} onClick={() => {
        window.location = info.repo
      }} />
    </AppBarBase>
  )
}

export default withRouter(AppBar)
