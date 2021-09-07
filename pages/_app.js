import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@/useStyles/theme'
import MomentUtils from '@date-io/moment';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
