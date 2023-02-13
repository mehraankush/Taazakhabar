import React,{useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'words-to-numbers';

import { NewsCards,Footer , Header} from './components'
import useStyles from './Styles.js'
import Logo from './assests/logo.jpg';

const alanKey = '9f4499698756d6c25a3c2cb585aa3d832e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

     useEffect(() => {
       alanBtn({ 
        key: alanKey,
         onCommand:({ command, articles , number})=>{
           if(command === 'newsHeading'){
            // console.log(articles)
            setNewsArticles(articles);
            // setActiveArticle(-1);
            }else if(command === 'highlight'){
              setActiveArticle((prevActiveArticle) => prevActiveArticle+1)
            }else if(command === 'open'){
              const parseNumber = number.length>2 ? wordsToNumbers((number), { fuzzy: true }) :number;
              const article = articles[parseNumber-1];
                console.log(article);
              if(parseNumber > articles.length){
                alanBtn().playText('Please Try another article.');
              }
              else if(article){
                window.open(article.url, '_blank')
                alanBtn().playText('Openning..');
              }

            }
          }
       })
    }, [])
   

  return (
    <div>
      <Header/>
      {/* Project Alan */}
      <div className={classes.logoContainer}>
          <img src={Logo} className={classes.alanLogo} alt='Alan logo'/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
      <Footer/>
    </div>
  )
}


export default App