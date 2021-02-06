import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorPage from './components/ErrorPage'
import Loading from './components/Loading'
import routes from './routes'
import InjectSearchAndParamRoute from './components/InjectSearchAndParamRoute'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ErrorBoundary page={<ErrorPage />}>
        <React.Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              {routes.map((item) => (<Route key={item.key} path={item.path}><InjectSearchAndParamRoute page={item.page} /></Route>))}
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default App
