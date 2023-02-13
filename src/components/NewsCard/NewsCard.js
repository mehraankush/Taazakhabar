import React, {useState, useEffect, createRef} from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
// import classNames from 'classnames';

import useStyles from './Styles'
// import Styles from './Styles';

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle}) => {
   const classes = useStyles();
   const [elRefs, setElRefs] = useState([]);
   const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop -50 );
  
   useEffect(() => {
     setElRefs((refs) =>(
      Array(20).fill().map((_, j) => refs[j] || createRef())
      ));
   
   }, [])
   
   useEffect(() => {
    if(i === activeArticle && elRefs[activeArticle]){
      scrollToRef(elRefs[activeArticle]);
    }
     
   }, [i, activeArticle, elRefs]);
   //, activeArticle === i ? classes.activeCard :null )

  return (
    <Card ref={elRefs[i]} className={`classes.card ${activeArticle === i ? 'classes.activeCard' :""}` } style={{borderBottom: '10px solid #2289a'}}>
       <CardActionArea href={url} target="_blank">
          <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbreaking-news&psig=AOvVaw3kFfzDiphx40McztCRbwMA&ust=1675421955688000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjD8qfX9vwCFQAAAAAdAAAAABAE'}/>

          <div className={classes.details}>
            <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt).toDateString())}</Typography>
            <Typography className={classes.sourcename} variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
          </div>

          <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
          
          <CardContent>
             <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
          </CardContent>
       
       </CardActionArea>
       
       <CardActions className={classes.cardActions}>
         <Button size='small' color='primary'>Learn More</Button>
         <Typography varient='h5' color='textSecondary' >{i+1}</Typography>
       </CardActions>
    
    </Card>
  )
}

export default NewsCard