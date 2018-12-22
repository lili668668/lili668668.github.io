import React from 'react'
import { useTranslation } from 'react-i18next/hooks'
import { makeStyles } from '@material-ui/styles'
import AppsIcon from '@material-ui/icons/Apps'
import MuiPopover from '@material-ui/core/Popover'
import Grid from '@material-ui/core/Grid'
import info from '../../../info'
import ToolbarIconButton from '../../plugins/ToolbarIconButton'
import PopoverPlugin from '../../plugins/Popover'
import AppsIconButton from '../../components/AppsIconButton'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing.unit,
    minWidth: 180,
    minHeight: 60
  }
}))

function AppsPopover (props) {
  const classes = useStyles()
  const [t] = useTranslation()

  const AppsButton = (props) => (<ToolbarIconButton icon={AppsIcon} tooltip={props.children} onClick={props.onClick} />)

  const Popover = (props) => (
    <MuiPopover
      onClose={props.onClose}
      open={props.open}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {props.children}
    </MuiPopover>
  )

  return (
    <PopoverPlugin buttonComponent={AppsButton} popoverComponent={Popover} buttonName={t('Slide Projects')}>
      <Grid container direction="row" jusitfy="flex-start" alignItems="flex-start" className={classes.card}>
        {info.apps.map(app => (<AppsIconButton key={app.name} alt={t(app.name)} name={t(app.name)} src={app.icon} href={app.link} />))}
      </Grid>
    </PopoverPlugin>
  )
}

export default AppsPopover
