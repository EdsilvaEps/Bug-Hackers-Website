import React, { Component } from 'react';
import './App.css';
//import { NavBarContainer } from './containers/NavBarContainer';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
//import { HashRouter } from 'react-router-dom';



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
    if(newPage === '/') pgName = Home;
    else if(newPage === '/projects') pgName = Projects;
    else if(newPage === '/about') pgName = About;
    console.log(pgName);
    this.setState({
      nav: newPage,
      page: pgName

    });
  }

  render() {
    return (

      <div className="App">
        <NavBar currentPage={this.state.nav} onChange={this.changePage} >
        </NavBar>
        <Home/>

        <Footer/>
      </div>




    );
  }
}

export default App;
