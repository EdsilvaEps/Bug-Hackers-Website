import React from 'react';
import { Slider } from '../components/Slider';
import VariableStore from '../Stores/VariableStore';

const items = [
  {
    src: require('../img/bh2.jpg'),
    altText: 'Café com Arduino',
    caption: 'Café com Arduino'
  },
  {
    src: require('../img/bh3.jpg'),
    altText: 'Quickstart Arduino',
    caption: 'Quickstart Arduino'
  },
  {
    src: require('../img/bh4.jpg'),
    altText: 'Cooperação e Compartilhamento',
    caption: 'Cooperação e Compartilhamento'
  }
];

export class SliderContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { isMobile: VariableStore.isMobile(), activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentWillMount(){
    // subscribe to VariableStore change of screen
    VariableStore.on("screen-size-change", () =>{
      this.setState({
        isMobile: VariableStore.isMobile()
      });
    });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render(){

    if(!this.state.isMobile){
      return <Slider onExiting={this.onExiting} onExited={this.onExited}
      items={items}  activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}
      goToIndex={this.goToIndex}/>;
    } else{
      return <div></div>
    }


  }
}
