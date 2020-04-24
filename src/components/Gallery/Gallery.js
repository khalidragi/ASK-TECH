import React, { Component } from 'react';
import './gallery.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import national from '../../assets/national.png';
import general from '../../assets/general.png';
import publicity from '../../assets/publicity.png';

export default class DemoCarousel extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="title">
          <h1>
            <span>Our</span> Wall of Pride
          </h1>
        </div>
        <div className="carousel">
          <Carousel
            width={570}
            autoPlay="true"
            stopOnHover="false"
            dynamicHeight={true}
            showThumbs={false}
            infiniteLoop={true}>
            <div>
              <img src={national} alt="Carousel" />
              <p className="legend">Legend 1</p>
            </div>
            {/* <div>
              <img src={roads} />
              <p className="legend">Legend 2</p>
            </div> */}
            <div>
              <img src={general} alt="Carousel" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src={publicity} alt="Carousel" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
