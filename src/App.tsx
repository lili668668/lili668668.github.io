import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorPage from './components/ErrorPage'
import Loading from './components/Loading'
import InjectPathOptionRoute from './components/InjectPathOptionRoute'
import theme from './theme'
import routes from './routes'
import './i18n'

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary page={<ErrorPage />}>
        <React.Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              {routes.map((item) => (<Route key={item.key} path={item.path}><InjectPathOptionRoute page={item.page} /></Route>))}
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </ErrorBoundary>
    </MuiThemeProvider>
  )
}

export default App
