/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import useStyles from '@/useStyles/404Styles';
import Link from 'next/link';
import PCMLOGO from '@/public/Images/PCMLOGO.png';
import Image from 'next/image';
import Head from "next/head";

export default function NotFound() {
  const classes = useStyles();

  return (
      <div className={classes.root}  >
            <Head>
                <title>Oooooops... That page cannot be found.</title>
            </Head>
           
                <div className={classes.main}>
                    <Link href="/" ><a><Image src={"/Images/PCM Black.png"} height={90} width={90}/></a></Link>
                    <Typography variant="h5" >Oooooops...</Typography>
                    <Typography variant="h5" >That page cannot be found.</Typography>
                    <Typography variant="h5"  >Go back to the <Link href="/" ><a style={{color:'#EC113E'}}>Homepage</a></Link></Typography>
                </div>
           
      </div>
      
      
  );
}