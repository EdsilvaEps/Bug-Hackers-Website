import React , { Component}  from 'react';
import { SliderContainer } from '../containers/SliderContainer';
import { EventsListContainer } from '../containers/EventsListContainer';
import { ArticlesListContainer } from '../containers/ArticlesListContainer';
import { AboutJumboContainer } from '../containers/AboutJumboContainer';
//import { ContactusContainer } from '../containers/ContactusContainer';
import { InfoContainer } from '../containers/InfoContainer';
import { Container, Row, Col } from 'reactstrap';
import { Element } from 'react-scroll';
import VariableStore from '../Stores/VariableStore';

export class Home extends Component {

  constructor(props){
    super(props);
    this.state = {isMobile: VariableStore.isMobile};
  }

  componentWillMount(){
    // subscribe to VariableStore change of screen
    VariableStore.on("screen-size-change", () =>{
      this.setState({
        isMobile: VariableStore.isMobile()
      });
    });
  }

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

      <Element name="info" className="element">
        <InfoContainer/>
      </Element>


      </div>
    )
  }
}
