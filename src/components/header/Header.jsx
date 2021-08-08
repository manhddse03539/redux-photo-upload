import React from 'react';
import { LogIn } from 'react-feather';
import { Link } from 'react-navi';
import Wrapper from './Header.styles';

function Header() {
  return (
    <Wrapper className="p-2 px-5 d-flex justify-content-between">
      <div className="brand">
        <Link href="/">Photoapp</Link>
      </div>
      <div className="auth">
        <LogIn size={24} />
        <Link href="/login">Login</Link>
      </div>
    </Wrapper>
  );
}

export default Header;
