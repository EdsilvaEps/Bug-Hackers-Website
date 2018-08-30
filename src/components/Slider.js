import React from 'react';
import '../css/freelancer.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../vendor/bootstrap/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


export const Slider = (props) => {
  const slides = props.items.map((item) => {
    //console.log(src);
    return(
      <CarouselItem
        onExiting={props.onExiting}
        onExited={props.onExited}
        key={item.src}
        tag='div'
        className='custom-item'
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-item{
            background:white;
            height:450px;



          }`
        }
      </style>
      <Carousel
        activeIndex={props.activeIndex}
        next={props.next}
        previous={props.previous}
      >
        <CarouselIndicators items={props.items} activeIndex={props.activeIndex}
        onClickHandler={props.goToIndex}/>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={props.previous}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={props.next}/>
      </Carousel>
    </div>

  );


}
