import React, { useState, useEffect, Component} from 'react'
import Logo from '../../assests/logo2.png'
import useStyle from  './Style.js';

function Header() {
  const styles = useStyle()
  const [scroll, setscroll] = useState(false);
  
const changeNavbar = () =>{
    // console.log(window.scrollY)
    if(window.scrollY >= 200){setscroll(true)}
    else{ setscroll(false); }
   
}

window.addEventListener('scroll',changeNavbar);

  return (
    <>
        <div className={styles.container}>
            <div>
              <img src={Logo} className={styles.logo}/>
            </div>
        </div>

    </>
  )
  
}

export default Header