import React from 'react';
import { Jumbotron, Button, Container, Media, Row, Col } from 'reactstrap';

//TODO: apply styles to background, pictures, paragraphs and margins
export const Info = (props)=>{

  const pages = props.items.map((item) =>{

    const media = item.srcs.map((data) =>{
      // TODO: add columns for even numbered data
      return(
        <Row>
          <Media>
            <Media left>
              <Media object src={data.src} alt={data.alt}/>
            </Media>
            <Media body>
              <Media heading>
                {data.title}
              </Media>
              {data.description}
            </Media>
          </Media>
        </Row>
      );

    });


    return(
      <Jumbotron fluid>
        <Container fluid>
          <h1>{item.title}</h1>
          {media}
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Container>
      </Jumbotron>
    );
  });

  return (
    <Container>
      {pages}
    </Container>
  );

}
