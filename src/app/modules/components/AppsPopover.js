import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next/hooks'
import { makeStyles } from '@material-ui/styles'
import AppsIcon from '@material-ui/icons/Apps'
import Popover from '@material-ui/core/Popover'
import Grid from '@material-ui/core/Grid'
import info from '../../../info'
import ToolbarIconButton from '../../plugins/ToolbarIconButton'
import AppsIconButton from '../../components/AppsIconButton'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing.unit,
    minWidth: 360,
    minHeight: 180
  }
}))

function AppsPopover (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  return (
    <React.Fragment>
      <ToolbarIconButton icon={AppsIcon} tooltip={t('Slide Projects')} onClick={(event) => {
        setAnchorEl(event.currentTarget)
      }} />
      <Popover
        onClose={() => setAnchorEl(null)}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Grid container direction="row" jusitfy="flex-start" alignItems="flex-start" className={classes.card}>
          {info.apps.map(app => (<AppsIconButton key={app.name} alt={t(app.name)} name={t(app.name)} src={app.icon} href={app.link} />))}
        </Grid>
      </Popover>
    </React.Fragment>
  )
}

AppsPopover.propTypes = {
  onBack: PropTypes.func
}

export default AppsPopover
