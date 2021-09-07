import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        padding: '0px 0px 0px 0px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 0px 0px 0px',
        },
    },

    rootItem:{
        overflow: 'hidden',
        display: 'flex',
        
        height: '200px',
        alignItems: 'center',
        padding: '30px 200px 60px 200px',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 10px 20px 10px',
            
        },
        [theme.breakpoints.down('xs')]: {
            padding: '10px 5px 0px 5px',
            
        },
    },
    imageBox:{
        width: '40%',
        display: 'flex',
        alignContent: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        },
        // [theme.breakpoints.down('md')]: {
        //     width: '50%',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '50%',
        // },
        [theme.breakpoints.down('xs')]: {
            alignSelf: 'end'
        },
    },
    image:{
        padding: '10px',
        width: '90%',
        height: '40%',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            width: '90%',
            height: '40%',
        },
       
    },
    noteBox:{
        width: '60%',
        margin: '0px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            width: '60%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
        
    },
    heading:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px'
        },
    },


    title:{
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    author: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px'
        },
    },
    description:{
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },

    button:{
        width: '100%',
        height: '50%',
        background: "linear-gradient(to right, #e43a15, #e65245)"
    },
    buttonitembox:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconButton:{
        color: theme.palette.secondary.light
    },
    textButton:{
        margin: '0px 10px 0px 10px',
        color: theme.palette.secondary.light,
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    arrowButton:{
        color: theme.palette.secondary.light
    },


}));