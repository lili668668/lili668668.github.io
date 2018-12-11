import { createMuiTheme } from '@material-ui/core/styles'

export const light = createMuiTheme({
  palette: {
    primary: {
      light: '#cadff1',
      main: '#bdd7ee',
      dark: '#8496a6',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#f3c69b',
      main: '#f0b883',
      dark: '#a8805b',
      contrastText: '#ffffff'
    }
  }
})
