import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root:{
        height:'280vh',
        width: '100%',
        display: "flex",
        flexDirection: 'column',  
        alignItems: 'center', 
        [theme.breakpoints.down('md')]: {
            height:'450vh',
          },
        [theme.breakpoints.down('sm')]: {
            height:'500vh',
        },
        [theme.breakpoints.down('xs')]: {
            height:'510vh',
        },
    },
    section1:{
        height: '55%',
        width: '100%',
        backgroundColor: '#2f2f2f',
    },
    header:{
        height: '40px',
        width: '100%',
        backgroundColor: '#0000FF',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headtext:{
        fontSize: '25px',
        color: '#FFFF00',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
        
    },
    body1:{
        margin: "0px 80px 0px 80px",
        [theme.breakpoints.down('sm')]: {
            margin: "0px 20px 0px 20px",
          },
        [theme.breakpoints.down('xs')]: {
            margin: "0px 5px 0px 5px",
        },
    },
    bodySection1:{
        margin: "10px 0px 30px 0px",
        textAlign: 'center'
    },
    titletext:{
        fontSize: '50px',
        [theme.breakpoints.down('md')]: {
            fontSize: '25px',
            margin: '20px 0px 20px 0px'
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    subtitletext: {
        fontWeight: '10',
        fontSize: '30px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
          },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    bodySection2:{
        width: '100%',
        display: "flex",
        flexDirection: 'row',   
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
            flexDirection: 'column',
          },
    },
    buttonPic:{
        display: "flex",
        flexDirection: 'column',  
        alignItems: 'center', 
    },
    steps:{
        padding:'15px',
        width: '30%',

        backgroundColor: '#fff',
        border: '4px solid  blue',
        display: "flex",
        flexDirection: 'column',  
        alignItems: 'center', 
        [theme.breakpoints.down('md')]: {
            margin: "40px 0px 0px 0px",
            width: '70%',
          },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            padding:'10px',
        },

    },
    button:{
        width: '90%',
        maxHeight: '100px',
        backgroundColor: 'blue',
        [theme.breakpoints.down('xs')]: {
            width: '98%',
        },
        
    },
    buttonBox:{
        display: "flex",
        flexDirection: 'column',  
        alignItems: 'center', 
    },
    buttonUp:{
        width: '100%',
        display: "flex",
        flexDirection: 'row',   
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontWeight:"600",
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
    },
    buttonIcon:{
        fontSize: '40px',
        margin:"0px 20px 0px 0px",
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px',
            margin:"0px 5px 0px 0px",
        },
    },
    buttonSubText:{
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
        },
    },
    buttonDown:{
        width: '100%',
        height: '10px'
    },
    imageBox:{
        margin: '20px 0px 0px 0px',
        width: '55%',
        maxHeight: '300px',
        overflow: 'hidden',
        border: '4px solid  #fff',
        [theme.breakpoints.down('md')]: {
            width: '80%',
          },
        [theme.breakpoints.down('xs')]: {
            width: '95%',
        },
    },
    countdownBox:{
        width: '100%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    countdownItem:{
        margin: '20px 5px 0px 5px',
        display: "flex",
        flexDirection: 'column',  
        alignItems: 'center', 
    },
    countdown:{
        marginBottom: '5px',
        border: '4px solid  #fff',
        padding: '20px',
        borderRadius: '50px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px',
        },
    },
    formControl:{
        margin: '0px 10px 0px 0px',
        alignSelf: 'flex-start'
    },
    section2:{
        height: '45%',
        width: '80%',
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: 'column',  
        alignItems: 'center', 
        [theme.breakpoints.down('md')]: {
            height: '50%',
            width: '100%',
          },
        [theme.breakpoints.down('sm')]: {
            height: '60%',
          },
        
    },
    section2Title:{
        margin: "30px 20px 30px 20px",
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: "30px 5px 10px 5px",
        },
        
    },
    section2TitleText:{
        [theme.breakpoints.down('sm')]: {
           fontSize: '25px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px'
        },
    },
    stepBox:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',  
            alignItems: 'center', 
            margin: '0px 0px 20px 0px'
         },
    },
    stepItem:{
        margin: '20px',
        padding: '30px',
        display: "flex",
        flexDirection: 'column',  
        alignItems: 'center',
        border: '4px solid  #DBE8D8',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '5px 5px 10px 5px',
            padding: '10px',
         },
    },
    stepText:{
        fontSize: '40px', 
        color:'blue',
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px', 
         },
    },
    stepSubText:{
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px', 
         }, 
    },
    modalBox:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E0FFFF',
        [theme.breakpoints.down('xs')]: {
            padding: '10px',
            margin:'0px'
         }, 
    },
    modalTitle:{
        color: 'blue',
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
         }, 
    },
    modalLabel:{
        margin: '20px 0px 0px 0px',
        fontSize: '20px', 
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
         }, 
    },
    modalField:{
        color: '#000'
    }



  }));
  