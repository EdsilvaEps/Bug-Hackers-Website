import React , { Component}  from 'react';
import { EventsListContainer } from '../containers/EventsListContainer';
import { ArticlesListContainer } from '../containers/ArticlesListContainer';
import { Container, Row, Col } from 'reactstrap';


export class Projects extends Component {
  render(){
    return (
      <Container className="container-body">
      <Col></Col>
      <Row>
        <Col>
          <EventsListContainer className="element" />
        </Col>
        <Col>
          <ArticlesListContainer/>
        </Col>
      </Row>


    </Container>
    )
  }
}
