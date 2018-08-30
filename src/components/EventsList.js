import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge, Media } from 'reactstrap';
import PropTypes from 'prop-types';

export const EventsList = (props) =>{
  const events = props.items.map((event) => {
    let badge = ''
    let image = ''
    if(event.badge == 'Bug Hackers'){
      badge = <Badge color="info">{event.badge}</Badge>;
    }
    else if(event.badge == 'CETELI'){
      badge = <Badge color="danger">{event.badge}</Badge>;
    }
    else if(event.badge == 'Icomp'){
      badge = <Badge color="primary">{event.badge}</Badge>;
    }
    else if (event.badge == 'blog'){
      badge = <Badge color="light">{event.badge}</Badge>;
    }

    if(event.src != ''){
      image = <Media left href="#"><Media object src={event.src} alt={event.alt} className="events-image"/></Media>;
    }

    return (
      <ListGroupItem className="element">
        <Media>
          {image}
          <Media body>
            <Media heading>
              {event.title} {badge}
            </Media>
            {event.description}
          </Media>
        </Media>
      </ListGroupItem>
    );

  });

  return(
    <ListGroup flush className="element-header">
      <ListGroupItem active>
        <ListGroupItemHeading> {props.listName} </ListGroupItemHeading>
      </ListGroupItem>
      {events}
    </ListGroup>
  );
};

EventsList.propTypes = {
  items : PropTypes.array,
  listName: PropTypes.string.required
};

EventsList.defaultProps = {
  items: [
    {
      title: ' ',
      description:'Sem novas atividades. ',
      badge: '',
      src: '',
      alt:''
    }
  ],
  listName:'Eventos'
};
