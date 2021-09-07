/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import useStyles from '@/useStyles/hubStyles';
import Link from 'next/link';
import PCMLOGO from '@/public/Images/strongcommunity.png';
import EBUDDYLOGO from '@/public/Images/shpping.png';
import PHBLOGO from '@/public/Images/startbusiness.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Image from 'next/image';
import Head from 'next/head'
import Carousel from 'nuka-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';


export default function LandingPage () {
  const classes = useStyles();
  
  return (
      <div className={classes.root} >
           <Head>
                <title>PHBWorx International Homepage</title>
            </Head>
          <div className={classes.firstSection} >
            <Carousel
            swiping
            autoplay={true}
            autoplayInterval={2000}
            dragging
              renderCenterLeftControls={({ previousSlide }) => (
                <IconButton onClick={previousSlide}><ArrowBackIosIcon style={{color:"#fff"}}/></IconButton>
               
              )}
              renderCenterRightControls={({ nextSlide }) => (
                  <IconButton onClick={nextSlide}><ArrowForwardIosIcon style={{color:"#fff"}}/></IconButton>
                
              )}
            >   
                <div className={classes.carItem1}>
                  <Link href="https://office.phb2020.com/login">
                    <Button variant="outlined" startIcon={<CheckIcon />} style={{color:'#000', border: '3px solid #000'}} className={classes.appButton} >
                           <Typography variant="body1">Get Started</Typography>
                    </Button>
                   </Link>
                </div>
                <div className={classes.carItem2}>
                    <Link href="https://ebuddy.ph/">
                      <Button variant="contained" color="secondary" className={classes.appButton} startIcon={<ShoppingCartIcon />} >
                            <Typography variant="body1">Start Shopping</Typography>
                      </Button>
                    </Link>
                </div>
                <div className={classes.carItem3}>
                    <Link href="/pcm">
                      <Button variant="contained" startIcon={<CreateIcon />} className={classes.appButton} >
                            <Typography variant="body1">Sign Up</Typography>
                      </Button>
                    </Link>
                </div>

                
   
            </Carousel>

          </div>

          <div className={classes.secondSection} >
              <div className={classes.boxItem}>
                <Image src={PHBLOGO} height={100} width={100}/>
                <div className={classes.labelBox}>
                    <Typography variant="h5" style={{fontSize: '20px'}} >PHBWorx</Typography>
                    <Typography variant="caption"  style={{fontSize: '12px'}}  >Start earning with PHBWorx. We make it easy for you.</Typography>
                </div>
              </div>

              <div className={classes.boxItem}>
                <Image src={EBUDDYLOGO} height={100} width={100}/>
                <div className={classes.labelBox}>
                    <Typography variant="h5" style={{fontSize: '20px'}}>Ebuddy</Typography>
                    <Typography variant="caption" style={{fontSize: '12px'}} >Shop and earn like no other with Ebuddy.</Typography>
                </div>
              </div>

              <div className={classes.boxItem}>
                <Image src={PCMLOGO} height={100} width={100}/>
                <div className={classes.labelBox}>
                    <Typography variant="h5" style={{fontSize: '20px' }}>PCM JOURNEY</Typography>
                    <Typography variant="caption"  style={{fontSize: '12px'}}  >Start building a strong community with the PCM Journey.</Typography>
                </div>
              </div>
              
          </div>   
        

          <div className={classes.thirdSection} >
            <Carousel
            swiping
            autoplay={true}
            autoplayInterval={2000}
            dragging
              renderCenterLeftControls={({ previousSlide }) => (
                <IconButton onClick={previousSlide}><ArrowBackIosIcon style={{color:"#fff"}}/></IconButton>
               
              )}
              renderCenterRightControls={({ nextSlide }) => (
                  <IconButton onClick={nextSlide}><ArrowForwardIosIcon style={{color:"#fff"}}/></IconButton>
                
              )}
            >   
            
                <div className={classes.featureItem1}>
                  <Link href="/c2b">
                    <Button variant="outlined" style={{color:'#000', border: '3px solid #000'}}   className={classes.appButton} >
                           <Typography variant="body1">Learn More</Typography>
                    </Button>
                    </Link>

                </div>
                <div className={classes.featureItem2}>
                    <Link href="/booster">
                      <Button variant="outlined" color="secondary" className={classes.appButton} >
                            <Typography variant="body1">Learn More</Typography>
                      </Button>
                    </Link>
                </div>
                <div className={classes.featureItem}>
                    <Button variant="outlined" color="secondary" className={classes.appButton}  >
                           <Typography variant="body1">Learn More</Typography>
                    </Button>
                </div>

                
   
            </Carousel>
                




          </div>

      </div>
      
      
  );
}