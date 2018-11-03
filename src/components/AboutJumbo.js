import React   from 'react';
import { Container, Row, Col, Jumbotron, Media } from 'reactstrap';
import PropTypes from 'prop-types'


export const AboutJumbo = (props) =>{

  const members = props.members.map((member, index) =>{

    if(index % 2 === 0){
      return(
        <Row>
          <br/>
          <Media>
            <Media left>
              <Media object src={member.src}  alt={member.alt} className="events-image"/>
            </Media>
          <Media body>
            <Media heading>
              {member.title}
            </Media>
              {member.description}
            </Media>
          </Media>
          <br/>
        </Row>

      );
    } else{

      return(
        <Row>
          <Media>
            <Media body>
              <Media heading>
                {member.title}
              </Media>
                {member.description}
              </Media>
              <Media right>
                <Media object src={member.src}  alt={member.alt} className="events-image"/>
              </Media>
          </Media>
        </Row>

      );
    }


  });


  return (
        <div className="container-body">

          <Jumbotron fluid className="element aboutJumbo">
            <Container fluid>
              <Row>
                <Col sm={{ size: 6, offset:3 }}>
                  <h1 className="display-3">Quem Somos</h1>
                  <p className="lead">O Bug Hackers é um espaço aberto e colaborativo, um laboratório descontraído para quem quiser construir e desenvolver circuitos, códigos e afins.</p>
                  <hr/>
                  {members}
                </Col>
              </Row>

            </Container>
          </Jumbotron>
        </div>
  );
};


AboutJumbo.propTypes = {
  items : PropTypes.array,
};

AboutJumbo.defaultProps = {
  items: [
    {
      title: ' ',
      description:'Hic Svnt Dracones ',
      badge: '',
      src: '',
      alt:''
    }
  ]
};
