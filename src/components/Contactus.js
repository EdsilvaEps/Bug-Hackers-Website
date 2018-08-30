import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


export const Contactus = (props) => {

  return (
    <Container>
      <Row>
        <br/>
        <Col sm={{ size: 'auto' }}>
          <h4>Manda um oi pra gente!</h4>
          <Form className="about-text-left">
            <FormGroup>
              <Label for="name">Nome Completo</Label>
              <Input name="nome" id="inputname" placeholder="Maria Joaquina" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Email</Label>
              <Input type="email" name="email" id="inputmail" placeholder="fulano@server..." />
            </FormGroup>
            <FormGroup>
              <Label for="name">Texto</Label>
              <Input type="textarea" name="text" id="textarea" placeholder="Escreva aqui sua reclamação" />
            </FormGroup>
            <Button>Mandar</Button>
          </Form>
          <br/>
        </Col>

      </Row>

    </Container>


  );

};
