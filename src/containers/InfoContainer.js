import React , { Component} from 'react';
import { Info } from '../components/Info';

// it would be good to make a separate items class
const items = [
  {
    title:'Portais Brasileiros de IoT e Embarcados',
    description:'',
    srcs:[
      {
        title:'FilipeFlop',
        src: require('../img/filipef.png'),
        alt:'filipeflop',
        link:"",
        description:"A busca incansável pela variedade e qualidade nos tornou um dos maiores \
         e-commerce de componentes eletrônicos do país."
      },

      {
        title:'Portal Embarcados',
        src: require('../img/embarcados.png'),
        alt:'embarcados',
        link:"",
        description:"Hic Svnt Dracones"
      },

      {
        title: 'Campus Party Brasil',
        src: require('../img/campusparty.png'),
        alt:'',
        link:'campusparty',
        description: "A Campus Party Brasil é o principal acontecimento tecnológico\
         realizado anualmente no Brasil. Nele são tratados os mais diversos temas\
          relacionados à Internet, reunindo um grande número de comunidades \
          e usuários da rede mundial de computadores envolvidos com \
          tecnologia e cultura digital."
      }

    ]
  }
]


export class InfoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {data : items}
  }

  render(){
    return <Info items={this.state.data}/>
  }

}
