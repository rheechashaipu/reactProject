import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render(){
    return(
      <header className="header">
        <h1>This is the common footer</h1>
        <ul>
          <li>First Page</li>
          <li>Second Page</li>
          <li>Third Page</li>
        </ul>
      </header>
      {this.props.children}
      <footer className="footer">
        <p>This is the common footer</p>
      </footer>
    );
  }
}

export default Header;
