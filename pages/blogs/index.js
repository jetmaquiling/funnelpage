/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-key */
import React from 'react';
import useStyles from '@/useStyles/blogStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import EventIcon from '@material-ui/icons/Event';
import LinkIcon from '@material-ui/icons/Link';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Link from 'next/link';
import AlbumIcon from '@material-ui/icons/Album';
import config from '@/config/configuration.json';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import Head from 'next/head'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


export default function Blog() {
    const classes = useStyles();
    const myRef = React.useRef(null);


    React.useEffect(() => {
        scrollToRef(myRef)
    }, [])

    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        async function getBlogs() { 
            const {data} = await axios.get(`${config.SERVER_URL}/blogs/`);
            setBlogs(data)
        }
        getBlogs()
    }, [])
  
  return (
    <div  container className={classes.root}  ref={myRef}>
        <Head>  
            <title>Blogs</title>
        </Head>
        <div  item md={12} style={{padding: '30px 0px' , width: '100%' ,  display:'flex' , justifyContent: 'center', textAlign: 'center'}}>

        <Typography variant='h2' color='primary' className={classes.heading} ><b>Every Journey Has A Story</b></Typography>
        </div>

        {blogs.map((blog, index)=>{
            return (
                <LazyLoad height={70} once>
                    <Link key={index} href={`/blogs/${blog.id}`}>
                        <div item className={classes.rootItem}>

                            <div className={classes.imageBox} >
                                <img  className={classes.image} src={blog.clipboard.url} />
                            </div>
                            
                            <div className={classes.noteBox}  >
                                    <Typography variant="h5" className={classes.title} >{blog.title}</Typography>
                                    <Typography variant="body2" className={classes.author} >By {blog.author}</Typography>
                                    <br/>
                                    <Typography variant="body2" className={classes.description} >{blog.description}</Typography>
                            </div>
                            
                        </div>
                    </Link>
                </LazyLoad>
            )

        })}
        <div  item md={12} style={{padding: '100px 0px 30px 0px' , width: '100%' ,  display:'flex' , justifyContent: 'center', textAlign: 'center'}}>

        <Typography variant="h6" >Help Inspire the Community, Tell Us Your Story. </Typography>
        </div>

    </div>
  );
}