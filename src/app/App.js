import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import LoadingPage from './modules/components/LoadingPage'
import ErrorBoundary from './modules/components/ErrorBoundary'
import routes from './routes'
import * as themes from './themes'

function App (props) {
  const { history } = props
  return (
    <MuiThemeProvider theme={themes.light}>
      <ThemeProvider theme={themes.light}>
        <CssBaseline />
        <Router history={history}>
          <ErrorBoundary>
            <React.Suspense fallback={<LoadingPage />}>
              <Switch>
                {routes}
              </Switch>
            </React.Suspense>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
