import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        backgroundColor: '#EEEDE7',
    },
    firstSection:{
        margin: '0px 00px 50px 00px',
        [theme.breakpoints.down('xs')]: {
            margin: '0px 00px 50px 00px',
            
        },     
    },
    
    carItem1:{
        backgroundImage: `url("/Images/phbworxpage.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "left",
        backgroundSize: 'cover',
        height:'120vh',
        backgroundColor:'#000090',
        display:'flex',
        padding: '0px 0px 20px 150px',
        justifyContent:'flex-start',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px 20px 0px',
            height:'95vh',
            margin: '0px 00px 50px 0px',
            justifyContent:'center',
            alignItems: 'flex-end',
        },   
    },

    carItem2:{
        backgroundImage: `url("/Images/ebuddypage.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "left",
        backgroundSize: 'cover',
        height:'120vh',
        backgroundColor:'#000090',
        display:'flex',
        padding: '0px 0px 20px 150px',
        justifyContent:'flex-start',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            height:'95vh',
            padding: '0px 0px 20px 0px',
            margin: '0px 00px 50px 0px',
            justifyContent:'center',
            alignItems: 'flex-end',
        },   
    },

    carItem3:{
        backgroundImage: `url("/Images/pcmpage.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "left",
        backgroundSize: 'cover',
        height:'120vh',
        backgroundColor:'#000090',
        display:'flex',
        padding: '0px 0px 20px 150px',
        justifyContent:'flex-start',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px 20px 0px',
            height:'95vh',
            margin: '0px 00px 50px 0px',
            justifyContent:'center',
            alignItems: 'flex-end',
        },   
    },



    secondSection:{
        margin: '20px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyItems: 'center',
            alignContents: 'center',
        },   
    },

    boxItem:{
        width: '30%',
        borderRadius: '10px',
        backgroundColor:'#fff',
        margin: '10px',
        padding: '20px 10px 20px 10px',
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '15px 5px',
        },   
    },
    labelBox:{
        marginLeft: "10px"
    },
    thirdSection:{
        overflow: 'hidden',
        borderRadius: '20px',
        padding: '80px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
        },  

    },
    featureItem:{
        borderRadius: '10px',
        backgroundImage: `url("/Images/thumbnailsample.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "left",
        backgroundSize: 'cover',
        height:'100vh',
        backgroundColor:'#000090',
        display:'flex',
        justifyContent:'flex-start',
        padding: '0px 0px 10px 0px',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            height:'95vh',
            margin: '0px 00px 50px 00px',
            justifyContent:'center',
            alignItems: 'flex-end',
        },   
    },

    featureItem1:{
        borderRadius: '10px',
        backgroundImage: `url("/Images/c2bpage.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "left",
        backgroundSize: 'cover',
        height:'100vh',
        backgroundColor:'#000090',
        display:'flex',
        
        justifyContent:'flex-start',
        padding: '0px 0px 20px 100px',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px 10px 0px',
            height:'95vh',
            margin: '0px 00px 50px 00px',
            justifyContent:'center',
            alignItems: 'flex-end',
        },   
    },

    featureItem2:{
        borderRadius: '10px',
        backgroundImage: `url("/Images/boosterpage.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "left",
        backgroundSize: 'cover',
        height:'100vh',
        backgroundColor:'#000090',
        display:'flex',
        
        justifyContent:'flex-start',
        padding: '0px 0px 20px 100px',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px 10px 0px',
            height:'95vh',
            margin: '0px 00px 50px 00px',
            justifyContent:'center',
            alignItems: 'flex-end',
        },   
    },

    title: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        
        
    },
    buttonBox:{
        display: "flex",
        justifyContent:'center',
       
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '50px 20px 20px 20px',
            justifyContent: 'center',
            alignItems: 'center',
          },
        [theme.breakpoints.down('xs')]: {
            
            
          },        
    },
    appButton:{
       width: '30rem',
       height: "6rem",
       margin: '100px 20px 20px 20px',
       borderRadius: '50px',
       [theme.breakpoints.down('sm')]: {
        margin: '5px 0px 20px 0px',
      },
        [theme.breakpoints.down('xs')]: {
            width: '30rem',
            height: "5.5rem",
        },    
    },
    
   
    
    video:{
        display: "flex",
        justifyContent:'center',
        margin: '70px 20px 10px 20px',
        [theme.breakpoints.down('sm')]: {
            margin: '70px 0px 10px 0px',
            height:"auto",
          },
    },
    videoFrame:{
        width:"97rem" ,
        height:"47rem",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: '200px'
          },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
          
        
    },
    

    
   




  }));
