import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Header from './header.jsx';
import Footer from './footer.jsx';
import PageOne from './pageOne.jsx';
import PageTwo from './pageTwo.jsx';
import PageThree from './pageThree.jsx';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/PageOne" component={PageOne} />
      <Route path="/PageTwo" component={PageTwo} />
      <Route path="/PageThree" component={PageThree} />
    </Route>
  </Router>,
  document.getElementById('app')
);
