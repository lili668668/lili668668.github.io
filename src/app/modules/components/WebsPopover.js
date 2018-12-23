import React from 'react'
import { useTranslation } from 'react-i18next/hooks'
import { withStyles } from '@material-ui/core/styles'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import MuiPopover from '@material-ui/core/Popover'
import info from '../../../info'
import PopoverPlugin from '../../plugins/Popover'

const styles = theme => ({
  button: {
    color: 'white'
  }
})

function WebsPopover (props) {
  const { classes } = props
  const [t] = useTranslation()

  const WebsButton = (props) => (<Button onClick={props.onClick} className={classes.button}>{props.children}</Button>)

  const Popover = (props) => (
    <MuiPopover
      onClose={props.onClose}
      open={props.open}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {props.children}
    </MuiPopover>
  )

  return (
    <PopoverPlugin buttonComponent={WebsButton} popoverComponent={Popover} buttonName={t('Old Website')}>
      <MenuList>
        {info.oldWebs.map(app => (<MenuItem key={app.name} component="a" href={app.link}>{t(app.name)}</MenuItem>))}
      </MenuList>
    </PopoverPlugin>
  )
}

export default withStyles(styles)(WebsPopover)
