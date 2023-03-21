import React from 'react';

import HeaderTop from './headers/HeaderTop';
import HeaderMain from './headers/HeaderMain';

import '../scss/components/_header.scss';

function Header() {
  return (
    <div className="header">
      <div className="headerTop">
        <HeaderTop />
      </div>
      <div className="headerMain">
        <HeaderMain />
      </div>
    </div>
  );
}

export default Header;
