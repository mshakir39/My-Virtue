import Link from 'next/link';
import { NavHeader, NavMenu, NavContainer, LoginBtn } from './Navigation.style';
import Button from '../ui/button';
import Img from 'next/image';
import { FaBars } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
const Navigation = () => {
  const [stickyClass, setStickyClass] = useState('relative');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setStickyClass('fixed') : setStickyClass('absolute');
    }
  };

  return (
    <NavHeader position={stickyClass}>
      <div>
        <Img src="/BrandLogo1.png" width={200} height={100}></Img>
      </div>
      <NavContainer>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login"> Login </Link>
        <Link href="/register"> Register </Link>
        {/* <Button label="Login" style={{ width: '100px' }} onClick={() => window.location.replace(`/login`)}></Button>
        <Button label="Register" style={{ width: '100px', marginRight: '10px' }}></Button> */}
        {/* <LoginBtn>Login</LoginBtn> */}
        {/* <LoginBtn>Register</LoginBtn> */}
      </NavContainer>
      <NavMenu>
        <FaBars></FaBars>
      </NavMenu>
    </NavHeader>
  );
};

export default Navigation;
