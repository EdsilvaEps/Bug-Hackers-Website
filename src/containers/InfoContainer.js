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
        description:"Estamos no mercado desde de 2010 e, impulsionados\
         pelo potencial do open source hardware, acreditamos no mercado brasileiro. \
         A busca incansável pela variedade e qualidade nos tornou um dos maiores \
         e-commerce de componentes eletrônicos do país."
      },

      {
        title:'Portal Embarcados',
        src: require('../img/embarcados.png'),
        alt:'embarcados',
        link:"",
        description:"Hic Svnt Dracones"
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
