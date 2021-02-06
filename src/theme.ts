import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%'
        },
        body: {
          height: '100%',
          width: '100%'
        }
      }
    }
  },
  palette: {
    background: {
      default: '#000'
    },
    text: {
      primary: '#8e8e8e'
    }
  },
  typography: {
    fontSize: 16
  }
})

export default theme