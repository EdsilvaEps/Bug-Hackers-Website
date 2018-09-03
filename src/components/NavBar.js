import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import '../css/freelancer.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../vendor/bootstrap/css/bootstrap.min.css';

export class NavBar extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleChange(e,pg){
    let page = pg;
    this.props.onChange(page);
    console.log(page);
  }

  componentDidMount(){

    Events.scrollEvent.register('begin', function(){
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(){
      console.log('end', arguments);
    });

  }

  scrollTo(){
    scroller.scrollTo('scroll-to-element', {
      duration: 300,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToTop(){
    scroll.scrollToTop();
  }

  componentWillUnMount(){
    Events.scrollEvent.remove('being');
    Events.scrollEvent.remove('end');
  }





  render(){

    return (
      <Nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav"
        onChange={this.handleChange}>
        <div className="container">
          <a className="navbar-brand" href="#page-top">Bug Hackers Hackerspace</a>
          <div id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link className="nav-link" onClick={this.scrollToTop}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="projects"  className="nav-link" spy={true} smooth={true}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link to='about' className="nav-link" spy={true} smooth={true} >
                  Sobre
                </Link>
              </li>
              <li>
                <Link to='info' className="nav-link" spy={true} smooth={true} >
                  Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Nav>


    );
  }
}
