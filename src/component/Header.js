import React, { useEffect, useState } from 'react';
import './header.css'
const Header = () => {

const [show , setShow] = useState(false)
useEffect(()=>{
  window.addEventListener('scroll', ()=>{
      if(window.scrollY > 100){
          setShow(true)
      }else{
          setShow(false)
      }
})

 return()=>{
   window.removeEventListener('scroll')
 }
},[])

    return (
        <header className={`header ${show && 'header__black'}`}>
           <img className='header__logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'  alt='' />
           <img className='header__userIcon' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'  alt='' />
        </header>
    );
};

export default Header;