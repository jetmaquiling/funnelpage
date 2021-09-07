import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    main:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '60px 0px 0px 0px',
          },
    },


  }));
  
