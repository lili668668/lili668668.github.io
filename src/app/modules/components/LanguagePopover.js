import React from 'react'
import { useTranslation } from 'react-i18next/hooks'
import { withStyles } from '@material-ui/core/styles'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import MuiPopover from '@material-ui/core/Popover'
import PopoverPlugin from '../../plugins/Popover'

const styles = theme => ({
  button: {
    color: 'white'
  }
})

function LanguagePopover (props) {
  const { classes } = props
  const [t, i18n] = useTranslation()

  const LanguageButton = (props) => (<Button onClick={props.onClick} className={classes.button}>{props.children}</Button>)

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
      {props.children({ onClose: props.onClose })}
    </MuiPopover>
  )

  return (
    <PopoverPlugin buttonComponent={LanguageButton} popoverComponent={Popover} buttonName={`${t('Language')}: ${t(i18n.language)}`}>
    {
      ({ onClose }) => (
        <MenuList>
          {i18n.languages.map(lng => (<MenuItem key={lng} onClick={() => { i18n.changeLanguage(lng); onClose(); }}>{t(lng)}</MenuItem>))}
        </MenuList>
      )
    }
    </PopoverPlugin>
  )
}

export default withStyles(styles)(LanguagePopover)
