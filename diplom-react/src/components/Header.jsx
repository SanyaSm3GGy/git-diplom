import React from 'react';

import HeaderTop from './headers/HeaderTop';

function Header() {
  return (
    <div className="header">
      <div className="headerTop">
        <div className="container">
          <HeaderTop />
        </div>
      </div>
      <div className="headerMain">
        <div className="container">headerMain</div>
      </div>
      <div className="headerSub">
        <div className="container">headerSub</div>
      </div>
    </div>
  );
}

export default Header;
