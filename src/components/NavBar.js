import React, { Component } from 'react';
import { Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
//import { throttle } from 'lodash.throttle'; TODO: uninstall this lib
import { throttle } from 'throttle-debounce';
import Variables from '../Variables';

import '../css/freelancer.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../vendor/bootstrap/css/bootstrap.min.css';



export class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = { isMobile: Variables.isMobile(), dropdownOpen: false }
    this.handleChange = this.handleChange.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleWindowResize = () => {

    // handling window resizing with throttle
   throttle(200,
      // responsivity achieved through checking for window size
      this.setState({ isMobile: window.innerWidth < 880 })
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

  // inializing listeners
  componentDidMount(){

    window.addEventListener('resize', this.handleWindowResize);

    Events.scrollEvent.register('begin', function(){
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(){
      console.log('end', arguments);
    });

  }

  // specified element
  scrollTo(){
    scroller.scrollTo('scroll-to-element', {
      duration: 300,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  // method for scrolling to top
  scrollToTop(){
    scroll.scrollToTop();
  }

  // remeve listeners
  componentWillUnMount(){
    window.removeEventListener('resize', this.handleWindowResize);
    Events.scrollEvent.remove('being');
    Events.scrollEvent.remove('end');
  }





  render(){

    const divStyle = {
      color:'white',
    //background:'white',

    };

    const dropdown =
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={divStyle} >
          <DropdownToggle caret color="info">
            Menu
          </DropdownToggle>

            <DropdownMenu>
              <Link className="nav-link" onClick={this.scrollToTop}>
                <DropdownItem>
                  Inicio
                </DropdownItem>
              </Link>
              <Link to='projects' className="nav-link" spy={true} smooth={true}>
                <DropdownItem>
                  Projetos
                </DropdownItem>
              </Link>
              <Link to='about' className="nav-link" spy={true} smooth={true}>
                <DropdownItem>
                  Sobre
                </DropdownItem>
              </Link>
              <Link to='info' className="nav-link" spy={true} smooth={true}>
                <DropdownItem>
                  Info
                </DropdownItem>
              </Link>
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
          <div id="navbarResponsive" style={divStyle}>

            {view}


          </div>
        </div>
      </Nav>


    );
  }
}
