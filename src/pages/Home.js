import React , { Component}  from 'react';
import { SliderContainer } from '../containers/SliderContainer';
import { EventsListContainer } from '../containers/EventsListContainer';
import { ArticlesListContainer } from '../containers/ArticlesListContainer';
import { AboutJumboContainer } from '../containers/AboutJumboContainer';
//import { ContactusContainer } from '../containers/ContactusContainer';
import { InfoContainer } from '../containers/InfoContainer';
import { Container, Row, Col } from 'reactstrap';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export class Home extends Component {
  render(){
    return (
      <div>
      <Container className="container-body">
      <Col></Col>
      <Row>
        <Col sm={{size:12}}>
          <SliderContainer/>
        </Col>
      </Row>
      <Row>
        <Col>
          <EventsListContainer className="element" />
        </Col>
        <Col>
          <Element name="projects" className="element">
            <ArticlesListContainer/>
          </Element>
        </Col>
      </Row>
      </Container>

      <Element name="about" className="element">
        <AboutJumboContainer/>
      </Element>

      <Element name="contact" className="element">
        <InfoContainer/>
      </Element>

      </div>
    )
  }
}
