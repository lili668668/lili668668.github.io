import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { Switch } from 'react-router-dom'
import routes from './routes'

function App (props) {
  const { history } = props
  return (
    <Router history={history}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes}
        </Switch>
      </React.Suspense>
    </Router>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
