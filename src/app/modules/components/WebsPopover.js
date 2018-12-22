import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next/hooks'
import { makeStyles } from '@material-ui/styles'
import Popover from '@material-ui/core/Popover'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import info from '../../../info'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white'
  }
}))

function WebsPopover (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  return (
    <React.Fragment>
      <Button className={classes.button} onClick={(event) => setAnchorEl(event.currentTarget)}>{t('Old Website')}</Button>
      <Popover
        onClose={() => setAnchorEl(null)}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuList>
          {info.oldWebs.map(app => (<MenuItem key={app.name} component="a" href={app.link}>{t(app.name)}</MenuItem>))}
        </MenuList>
      </Popover>
    </React.Fragment>
  )
}

WebsPopover.propTypes = {
  onBack: PropTypes.func
}

export default WebsPopover
