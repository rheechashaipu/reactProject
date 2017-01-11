import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render(){
    return(
      <header className="header">
        <h1>This is the common Header</h1>
        <ul>
          <li><Link to="PageOne">First Page</Link></li>
          <li><Link to="PageTwo">Second Page</Link></li>
          <li><Link to="PageThree">Third Page</Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;
