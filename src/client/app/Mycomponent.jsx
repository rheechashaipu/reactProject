import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <div>
        <header className="header">
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </header>
        <footer className="footer">
          <p>This is the common footer</p>
        </footer>
      </div>
    );
  }
}


export default Header;
