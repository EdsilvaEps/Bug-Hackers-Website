import React from 'react';
import { EventsList } from '../components/EventsList';

const items = [
  {
    title: 'Café com arduino ',
    description:'Sexta-feira 10/08 sala 308 da FT. ',
    badge: 'Bug Hackers',
    src: '',
    alt:''
  },
  {
    title: 'Palestra IoT ',
    description:'20/10, Quarta-feira, Auditório Rio Javari. ',
    badge: 'Icomp',
    src:'',
    alt:''
  },
  {
    title: 'Programação para TV Digital ',
    description:'20/10, Quarta-feira, Laboratório do CETELI. ',
    badge: 'CETELI',
    src:'',
    alt:''
  }
];

export class EventsListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {events: items};

  }

  render(){
    return <EventsList items={this.state.events} listName="Eventos"/>;
  }

}
