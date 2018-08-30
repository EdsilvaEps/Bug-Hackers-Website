import React from 'react';
import { NavBar } from '../components/NavBar';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export class NavBarContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = { nav : '/'};
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage){
    this.setState({
      nav: newPage
    });
  }

  render(){
    return (
      <HashRouter>
        
        <NavBar currentPage={this.state.nav} onChange={this.changePage}>
          <NavLink to={this.state.nav}/>
        </NavBar>;
      </HashRouter>

    )
  }
}

/*NavBarContainer.defaultProps = {
  nav: 'home'
};*/

/*NavBarContainer.propTypes = {
  nav: React.PropTypes.string
};*/
