import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@/useStyles/theme'
import MomentUtils from '@date-io/moment';


function MyApp({ Component, pageProps }) {


  React.useEffect(() => {

    
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
        OneSignal.init({
            appId: "8649f09e-a699-4c12-997a-e6e16ecd6c84",
            safari_web_id: "web.onesignal.auto.1e4cdd3c-fd67-4db9-823a-6a25dd50e774",
            notifyButton: {
                enable: true,
            },

            allowLocalhostAsSecureOrigin: true,
        });
    });

    return () => {
        window.OneSignal = undefined;
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
