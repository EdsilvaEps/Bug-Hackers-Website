import React from 'react';
import { EventsList } from '../components/EventsList';

const items = [
  {
    title: 'Lógica Proposicional com Redes Neurais ',
    description:'Autor: Edson Silva ',
    badge:'blog',
    src: require('../img/edson.jpg'),
    alt:'edson'
  },
  {
    title: 'Dominó Simplificado em Prolog ',
    description:'Autor: Edson Silva ',
    badge:'blog',
    src: require('../img/edson.jpg'),
    alt:'edson'
  },
  {
    title: 'Arduino-based plant watering system ',
    description:'Autor: Edson Silva',
    badge: 'blog',
    src: require('../img/edson.jpg'),
    alt:'edson'
  }
];

export class ArticlesListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {articles: items};

  }

  render(){
    return <EventsList items={this.state.articles} listName="Artigos e Projetos"/>;
  }

}
