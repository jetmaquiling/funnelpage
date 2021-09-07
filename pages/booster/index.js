/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import useStyles from '@/useStyles/c2bStyles';
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios';
import config from '@/config/configuration.json';
import {useRouter} from 'next/router';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function Booster() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({firstname: '',lastname:'', contact: '',email: '', geocode:'',notification: '', interest: 'Booster'})
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    
  };


  const handleSubmit = (form) => {
    axios.post(`${config.SERVER_URL}/prospects`,{
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        contact: form.contact,
        geocode: form.geocode,
        notification: form.notification,
        interest: form.interest
    }).then(response => {
        router.push("/")
    })
};


  function showPosition(position) {
    setForm({...form , geocode: `{"latitude":${position.coords.latitude}, "longitude":${position.coords.longitude}}`})
  }
  const handleClose = () => {
    setOpen(false);
  };





  return (
      <div className={classes.root}  >
            <Head>
                <title>THIS IS BOOSTER PAGE</title>
                <meta property="og:type"   content="website" />
                <meta property="og:title" content="BYOB Build Your Online Business"/>
                <meta property="og:description"  content="Booster is really for you to try! Ask me Why?" />
                <meta property="og:image" content='https://res.cloudinary.com/dnclv0tnh/image/upload/v1630401996/thumbnailsample_8aae97e6c8.png' key="ogimage" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <DialogContent className={classes.modalBox} >
                    <div style={{width: '100%'}}>
                        <IconButton edge="end"  color="primary" onClick={handleClose} aria-label="close" style={{float: "right"}}>
                                <CloseIcon  style={{fontSize:'40px',}}/>
                        </IconButton>
                    </div>
                    
                    <Typography variant="h4"  className={classes.modalTitle} >Where Can I Send Your FREE Access? </Typography>
                    <Typography variant="h6" className={classes.modalLabel} >First Name</Typography>
                    <TextField
                        className={classes.modalField} 
                        autoFocus
                        id="name"
                        type="name"
                        fullWidth
                        onChange={(e)=>{setForm({...form, firstname: e.target.value})}}
                        value={form.firstname}
                        variant="outlined"
                    />
                    <Typography variant="h6" className={classes.modalLabel} >Last Name</Typography>
                    <TextField
                        className={classes.modalField} 
                        autoFocus
                        id="name"
                        type="name"
                        fullWidth
                        onChange={(e)=>{setForm({...form, lastname: e.target.value})}}
                        value={form.lastname}
                        variant="outlined"
                    />
                    <Typography variant="h6" className={classes.modalLabel}  >Email Address</Typography>
                    <TextField
                        id="name"
                        type="email"
                        fullWidth
                        onChange={(e)=>{setForm({...form, email: e.target.value})}}
                        value={form.email}
                        variant="outlined"
                    />
                    <Typography variant="h6" className={classes.modalLabel} >Contact Name</Typography>
                    <TextField
                        className={classes.modalField} 
                        autoFocus
                        id="name"
                        type="tel"
                        fullWidth
                        onChange={(e)=>{setForm({...form, contact: e.target.value})}}
                        value={form.contact}
                        variant="outlined"
                    />
                    <Button className={classes.button} style={{width: '100%', marginTop:"20px"}} onClick={()=>handleSubmit(form)}>
                        <div className={classes.buttonBox}>
                        <div className={classes.buttonUp}>
                            <ArrowForwardIcon color="secondary" className={classes.buttonIcon} />
                            <Typography variant="h3" color="secondary" className={classes.buttonText} >Click Here To Register</Typography>
                        </div>
                            <Typography color="secondary" className={classes.buttonSubText}  variant="body2">This Training will Start Soon! Register Now</Typography>
                        </div> 
                    </Button>     
                    <div className={classes.countdownBox}>
                        <div className={classes.countdownItem}>
                            <div style={{border: '4px solid  #000'}} className={classes.countdown}>
                                <Typography variant="h4">00</Typography>
                            </div>
                            <Typography variant="caption">HOUR</Typography>
                        </div>

                        <div className={classes.countdownItem}>
                            <div style={{border: '4px solid  #000'}} className={classes.countdown}>
                                <Typography  variant="h4">00</Typography>
                            </div>
                            <Typography  variant="caption">MINUTE</Typography>
                        </div>

                        <div className={classes.countdownItem}>
                            <div style={{border: '4px solid  #000'}} className={classes.countdown}>
                                <Typography  variant="h4">00</Typography>
                            </div>
                            <Typography variant="caption">SECOND</Typography>
                        </div>
                    </div>      
                    
                    </DialogContent>
                </Dialog>



            <div className={classes.section1}>
                <div className={classes.header}>
                    <Typography variant="h6" className={classes.headtext}>FREE Training Tonight</Typography>
                </div>

                <div className={classes.body1}>
                    <div className={classes.bodySection1}>
                            <Typography color="secondary" variant="h1" className={classes.titletext}>Step-By-Step Training For Anyone Who Wants To Build OR Grow Their Business Online But Doesn’t Know How To Start</Typography>
                            <Typography color="secondary" variant="h2" className={classes.subtitletext}>Discover How You Can Copy & Leverage The Exact Marketing System & Strategy I Am Using To Build & Grow My 9-Digit Information & Affiliate Marketing Business Online</Typography>
                    </div>
                    <div className={classes.bodySection2}>
                            <div className={classes.buttonPic}>
                                <Button className={classes.button}  onClick={handleClickOpen}>
                                   <div className={classes.buttonBox}>
                                   <div className={classes.buttonUp}>
                                        <ArrowForwardIcon color="secondary" className={classes.buttonIcon} />
                                        <Typography variant="h3" color="secondary" className={classes.buttonText} >Click Here To Register</Typography>
                                    </div>
                                        <Typography color="secondary" className={classes.buttonSubText}  variant="body2">This Training will Start Soon! Register Now</Typography>
                                   </div>
                                    
                                    
                                </Button>
                                
                                <div className={classes.imageBox}>
                                    <Image alt="Image" src={'/Images/image.jpg'} height={900} width={1200}/>
                                </div>
                                
                                <div className={classes.countdownBox}>
                                    <div className={classes.countdownItem}>
                                        <div className={classes.countdown}>
                                            <Typography color="secondary" variant="h4">00</Typography>
                                        </div>
                                        <Typography color="secondary" variant="caption">HOUR</Typography>
                                    </div>

                                    <div className={classes.countdownItem}>
                                        <div className={classes.countdown}>
                                            <Typography color="secondary" variant="h4">00</Typography>
                                        </div>
                                        <Typography color="secondary" variant="caption">MINUTE</Typography>
                                    </div>

                                    <div className={classes.countdownItem}>
                                        <div className={classes.countdown}>
                                            <Typography color="secondary" variant="h4">00</Typography>
                                        </div>
                                        <Typography color="secondary" variant="caption">SECOND</Typography>
                                    </div>
                                </div>
                                
                                {/* button and picture  */}
    
                            </div>

                            <div className={classes.steps}>
                                <Typography style={{ margin: '10px' }} variant="h5">STEP 1: What's Your Business?</Typography>
                                <div style={{width: '90%', backgroundColor: 'blue', height: '10px', margin: '20px' }}/>

                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormGroup>
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}}  onClick={handleClickOpen} color="primary" checked={false}  name="gilad" />}
                                        label="I Don't Have A Business Yet"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}}  onClick={handleClickOpen} color="primary" checked={false}  name="gilad" />}
                                        label="
                                        Affiliate Marketing"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox  onClick={handleClickOpen} style={{color: '#FBA30A'}} 
                                            color="primary" checked={false}  name="jason" />}
                                        label="
                                        Information Marketing"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}} onClick={handleClickOpen}  checked={false}name="antoine" />}
                                        label="Network Marketing"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}}  onClick={handleClickOpen} checked={false}name="antoine" />}
                                        label="Coaching / Consulting"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}}  onClick={handleClickOpen} checked={false}name="antoine" />}
                                        label="Agent"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}} onClick={handleClickOpen} checked={false}name="antoine" />}
                                        label="Freelancing"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}}  onClick={handleClickOpen} checked={false}name="antoine" />}
                                        label="Ecommerce / Physical Products"
                                    />
                                    <Divider />
                                    <FormControlLabel
                                        control={<Checkbox style={{color: '#FBA30A'}}  onClick={handleClickOpen} checked={false}name="antoine" />}
                                        label="Others..."
                                    />
                                    </FormGroup>
                                </FormControl>
                            </div>
                    </div>
                </div>


            </div>
            <div className={classes.section2}>

                <div className={classes.section2Title}>
                    <Typography variant="h3" className={classes.section2TitleText}>Watch This FREE Step-By-Step Training To Discover These 3 Unkown Steps That Top Online Entrepreneurs & Affiliate Marketers Are Following</Typography>
                </div>
                <div className={classes.stepBox}>
                    <div className={classes.stepItem}>
                        <Typography variant="h4"  className={classes.stepText} >Step 1</Typography>
                        <Typography variant="body1" className={classes.stepSubText}>How To Build A Long Term Business Online By Marketing Other People’s Products Without The Hassle Of A Traditional Model & Without Any Marketing Experience Required</Typography>
                    </div>
                    <div className={classes.stepItem}>
                        <Typography className={classes.stepText}  variant="h4">Step 2</Typography>
                        <Typography variant="body1" className={classes.stepSubText}>How To Build A Long Term Business Online By Marketing Other People’s Products Without The Hassle Of A Traditional Model & Without Any Marketing Experience Required</Typography>
                    </div>
                    <div className={classes.stepItem}>
                        <Typography className={classes.stepText}  variant="h4">Step 3</Typography>
                         <Typography variant="body1" className={classes.stepSubText}>How To Build A Long Term Business Online By Marketing Other People’s Products Without The Hassle Of A Traditional Model & Without Any Marketing Experience Required</Typography>
                    </div>

                </div>
                <Button className={classes.button}  onClick={handleClickOpen}>
                    <div className={classes.buttonBox}>
                    <div className={classes.buttonUp}>
                        <ArrowForwardIcon color="secondary" className={classes.buttonIcon} />
                        <Typography variant="h3" color="secondary" className={classes.buttonText} >Click Here To Register</Typography>
                    </div>
                        <Typography color="secondary" className={classes.buttonSubText}  variant="body2">This Training will Start Soon! Register Now</Typography>
                    </div>
                    
                                    
                </Button>

                <div className={classes.countdownBox}>
                        <div className={classes.countdownItem}>
                            <div style={{border: '4px solid  #000'}} className={classes.countdown}>
                                <Typography variant="h4">00</Typography>
                            </div>
                            <Typography variant="caption">HOUR</Typography>
                        </div>

                        <div className={classes.countdownItem}>
                            <div style={{border: '4px solid  #000'}} className={classes.countdown}>
                                <Typography  variant="h4">00</Typography>
                            </div>
                            <Typography  variant="caption">MINUTE</Typography>
                        </div>

                        <div className={classes.countdownItem}>
                            <div style={{border: '4px solid  #000'}} className={classes.countdown}>
                                <Typography  variant="h4">00</Typography>
                            </div>
                            <Typography variant="caption">SECOND</Typography>
                        </div>
                    </div>               


            </div>
      </div>
      
      
  );
}