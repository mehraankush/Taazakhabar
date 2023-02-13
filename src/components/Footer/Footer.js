import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './Styles'
import img from '../../assests/image.jpeg'

const Footer = () => {
    const styles = useStyles()

   const Linkedin = () =>{
    window.open("https://www.linkedin.com/in/ankush-mehra-9a57a1233/", '_blank')
  }
   const instagram = () =>{
    window.open("https://www.instagram.com/mehra_69/", '_blank')
  }
   const github = () =>{
    window.open("https://github.com/mehraankush", '_blank')
  }

  return (
    <div className={styles.container}>
       <div className={styles.footer}>
           <div className={styles.about}>
                <h1>About</h1>
                <Typography className={styles.quote} varient='h6'><strong> Ankush Mehra :</strong> <br/> 
                    <i><q>I'm a web developer with a focus on the MERN stack, 
                        but still exploring other technologies and frameworks that catch 
                        my interest! if you're looking for a developer to add to your team, 
                        I'd love to hear from you!
                        </q></i>
                </Typography>
            </div>
            <div >
                <img className={styles.image} src={img}/>
            </div>
       </div>
       <div className={styles.socials}>
            <AiFillLinkedin  size={40} color="white" cursor="pointer"  onClick={Linkedin}/>
            <AiFillInstagram size={40} color="white" cursor="pointer" onClick={instagram}/>
            <AiOutlineGithub size={40} color="white" cursor="pointer" onClick={github}/>
            <AiOutlineTwitter size={40} color="white" cursor="pointer" onClick={Linkedin}/>
       </div>
    </div>

  )
}

export default Footer