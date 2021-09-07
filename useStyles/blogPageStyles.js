import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        margin: '20px 100px 100px 100px',
        width: '50%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        wordWrap: "break-word" ,
         overflow:"hidden",

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '10px 0px',
        },
    },
    main:{
        margin: '5px'
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        margin: "10px"
    },
    
    imageBox:{
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        // [theme.breakpoints.down('md')]: {
        //     width: '50%',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '50%',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '400%',
        // },
    },
    image:{
        width: '100%',
        height: '50%',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            width: '100%',
            height: '40%',
        },
    },
    title:{
        fontSize: '50px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
            margin: '0px 0px 20px 0px'
        },
    },
    author:{
        backgroundColor: 'rgba(0, 0, 0, .3)',
        borderRadius: '23px',
        margin: '15px 5px',
        display: 'flex',
       alignItems: 'center',
    },
    buttonBig:{
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    buttonSmall:{
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },

  
 }));
