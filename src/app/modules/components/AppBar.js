import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withRouter } from "react-router"
import { useTranslation } from 'react-i18next/hooks'
import { withStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CodeIcon from '@material-ui/icons/Code'
import info from '../../../info'
import AppBarBase from '../../components/AppBar'
import ToolbarIconButton from '../../plugins/ToolbarIconButton'
import AppsPopover from './AppsPopover'

const styles = theme => ({
  grow: {
    flexGrow: 1
  }
})

function AppBar (props) {
  const [t] = useTranslation()
  const { classes, history, onBack } = props
  return (
    <AppBarBase>
      {onBack !== undefined && (<ToolbarIconButton icon={ArrowBackIcon} tooltip={t('back')} onClick={onBack} />)}
      <div className={classes.grow} />
      <AppsPopover />
      <ToolbarIconButton icon={AccountCircleIcon} tooltip={t('Introduction')} onClick={() => {
        history.push('/introduction/me')
      }} />
      <ToolbarIconButton icon={CodeIcon} tooltip={t('GitHub Repo')} onClick={() => {
        window.location = info.repo
      }} />
    </AppBarBase>
  )
}

AppBar.propTypes = {
  onBack: PropTypes.func
}

export default compose(
  withStyles(styles),
  withRouter
)(AppBar)
