import React from 'react';
import { Jumbotron, Container, Media, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';


//TODO: apply styles to background, pictures, paragraphs and margins
export const Info = (props)=>{

  const pages = props.items.map((item) =>{

    const media = item.srcs.map((data, index) =>{
      // TODO: add columns for even numbered data


      return(
        <Col>
          <Media>
            <Media left>
              <Media object src={data.src} alt={data.alt} className="events-image"/>
            </Media>
            <Media body className="about-text-left">
              <Media heading>
                {data.title}
              </Media>
              {data.description}
            </Media>
          </Media>
        </Col>
      );




    });


    return(
      <Jumbotron fluid  className="infoJumbo">
        <Container fluid>
          <h1>{item.title}</h1>
          <br/>
          <Row>
            {media}
          </Row>

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


Info.propTypes = {
  items : PropTypes.array,
};

Info.defaultProps = {
  items: [
    {
      title: ' ',
      description:'Hic Svnt Dracones ',
      src: '',
      link:'',
      alt:''
    }
  ]
};
