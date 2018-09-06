import React, { Component } from 'react';
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
//import { throttle } from 'lodash.throttle'; TODO: uninstall this lib
import { throttle } from 'throttle-debounce';

import '../css/freelancer.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../vendor/bootstrap/css/bootstrap.min.css';



export class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = { isMobile: false, dropdownOpen: false }
    this.handleChange = this.handleChange.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleWindowResize = () => {

    // handling window resizing with throttle
   throttle(200,
      // responsivity achieved through checking for window size
      this.setState({ isMobile: window.innerWidth < 480 })
    );
   console.log(this.state.isMobile);
  }


  handleChange(e,pg){
    let page = pg;
    this.props.onChange(page);
    console.log(page);
  }

  toggle() { // setup of dropdown, if we need it
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidMount(){

    window.addEventListener('resize', this.handleWindowResize);

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
    window.removeEventListener('resize', this.handleWindowResize);
    Events.scrollEvent.remove('being');
    Events.scrollEvent.remove('end');
  }





  render(){

    const dropdown =
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link className="nav-link" onClick={this.scrollToTop}>
                Inicio
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="nav-link" onClick={this.scrollToTop}>
                Inicio
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to='about' className="nav-link" spy={true} smooth={true} >
                Sobre
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to='info' className="nav-link" spy={true} smooth={true} >
                Info
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

    ;

    const navmenu =
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

    ;

    let view = navmenu;
    (this.state.isMobile) ? view = dropdown : view = navmenu;

    return (
      <Nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav"
        onChange={this.handleChange}>
        <div className="container">
          <a className="navbar-brand" href="#page-top">Bug Hackers Hackerspace</a>
          <div id="navbarResponsive">

            {view}


          </div>
        </div>
      </Nav>


    );
  }
}
