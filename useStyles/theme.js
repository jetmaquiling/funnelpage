import { createTheme } from '@material-ui/core/styles';

// import SegoeUIwoff2 from './AnyConv.com__SEGOEUI.woff2';

// const SegoeUI = {
//   fontFamily: 'SegoeUI',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 500,
//   src: `
//     local('SegoeUI'),
//     local('SegoeUI-Regular'),
//     url(${SegoeUIwoff2}) format('woff2')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };


const theme = createTheme({
  overrides: {
    MuiTextField: {
      root: {
        fontSize: '1.5rem'
      },
    },

    MuiAlert:{
      message:{
        fontSize: '1.5rem'
      }
    },

    MuiInputLabel: {
      shrink: {
        fontSize: '2rem',
        
      },
      root: {
        fontSize: '1.5rem',
        
      },
      filled: {
        
        '&$shrink': {
          transform: 'translate(12px, -6px) scale(.75)',
          transformOrigin: 'top left',
          padding: '0 1px',
          background: '#ffffff',
         },
      },
      outlined: {
        
        '&$shrink': {
          transform: 'translate(12px, -6px) scale(.75)',
          transformOrigin: 'top left',
          padding: '0 1px',
          background: '#ffffff',
         },
      },
    },

    MuiInputBase:{
      input:{
        fontSize: '2rem',
        lineHeight:'20px',
      }
    },
    MuiSvgIcon:{
      root:{
        fontSize: '2.0rem'
      }
    },
    MuiPickersCalendarHeader:{

    }
},


  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#EC113E',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    typography: {
      fontFamily: 'SegoeUI',
    },
    
    h1:{
      fontWeight:1000,
      fontSize: '20rem',
     
    },
    h2:{
      fontWeight:1000,
      fontSize: '7rem',
      
    },
    h4:{
      fontWeight:800,
      fontSize: '2.5rem',
      
    },
    h5:{
      fontWeight:600,
      fontSize: '2.0rem',
     
    },
    h6:{
      fontWeight:600,
      fontSize: '1.5rem',
      
    },
    subtitle1:{
      fontWeight:300,
      fontSize: '1.5rem',
      
    },
    subtitle2:{
      fontWeight:100,
      fontSize: '1.5rem',
      
    },
    button:{
      fontWeight:100,
      fontSize: '1.5rem',
      
    },
    overline:{
      fontSize: '3.5rem'
    },
    caption:{
      fontSize: '1.5rem'
    },
    body2:{ 
      fontSize: '1.5rem'
    },
    body1:{ 
      fontSize: '2rem'
    }
  }
  
});

export default theme;