import React from 'react';
import { AboutJumbo } from '../components/AboutJumbo';

const items = [
  {
    title:'Edson Silva',
    description: 'Cras sit amet nibh libero,\
     in gravida nulla. Nulla vel metus scelerisque \
     ante sollicitudin commodo. Cras purus odio,\
     vestibulum in vulputate at, tempus viverra \
     turpis. Fusce condimentum nunc ac nisi vulputate \
     fringilla. Donec lacinia congue felis in faucibus.',
    src:require('../img/edson.jpg'),
    alt:'edson'
  },

  {
    title:'Eneas Carneiro',
    description: 'Cras sit amet nibh libero,\
     in gravida nulla. Nulla vel metus scelerisque \
     ante sollicitudin commodo. Cras purus odio,\
     vestibulum in vulputate at, tempus viverra \
     turpis. Fusce condimentum nunc ac nisi vulputate \
     fringilla. Donec lacinia congue felis in faucibus.',
    src:require('../img/eneas.jpg'),
    alt:'Jon'
  },

  {
    title:'John D',
    description: 'Cras sit amet nibh libero,\
     in gravida nulla. Nulla vel metus scelerisque \
     ante sollicitudin commodo. Cras purus odio,\
     vestibulum in vulputate at, tempus viverra \
     turpis. Fusce condimentum nunc ac nisi vulputate \
     fringilla. Donec lacinia congue felis in faucibus.',
    src:require('../img/jon_d.jpg'),
    alt:'JonD'
  },
];

export class AboutJumboContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {members: items};

  }

  render(){
    return <AboutJumbo members={items} />;
  }

}
