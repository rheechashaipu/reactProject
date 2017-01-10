import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';


class App extends React.Component {
  render () {
    return(
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



render(<App/>, document.getElementById('app'));
