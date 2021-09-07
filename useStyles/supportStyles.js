import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    main:{
        height: '180vh',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '60px 0px 0px 0px',
          },
    },

    box1:{
        backgroundImage: `url("/Images/image.jpg")`,
        width: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },    

    },

    box2:{
        width: '40%',
        textAlign: 'center',
        margin: '0px 20px 40px 20px',
        [theme.breakpoints.down('sm')]: {
            width: '500px',
        },    
    },
    titleBox:{
        margin: '10px auto 50px auto ',
        width: '100%',
    },
    formItem:{
        margin: '20px auto 20px auto',
    },
    formBox:{
        padding: '0px 40px 0px 40px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 0px 0px 00px',
        },    
    },
    formItemButton:{
        margin: '80px auto 20px auto', 
    },
    back:{
        fontSize: '50px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize:'30px'
        },    
    },

  }));
  
