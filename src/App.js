import React, { Component } from 'react';
import './App.css';
import { NavBarContainer } from './containers/NavBarContainer';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



class App extends Component {
  constructor(props){
    super(props);
    this.state = { nav : '/', page: Home };
    this.changePage = this.changePage.bind(this);

    // react scroll
    //this.scrollToTop = this.scrollToTop.bind(this);
  }

  

  changePage(newPage){
    let pgName;
    if(newPage == '/') pgName = Home;
    else if(newPage == '/projects') pgName = Projects;
    else if(newPage == '/about') pgName = About;
    console.log(pgName);
    this.setState({
      nav: newPage,
      page: pgName

    });
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar currentPage={this.state.nav} onChange={this.changePage} >
          </NavBar>
          <Home/>

          <Footer/>
        </div>
      </HashRouter>



    );
  }
}

/*
<Route exact path="/" component={Home}/>
<Route path="/projects" component={Projects}/>
<Route path="/about" component={About}/>
*/

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
*/

export default App;
