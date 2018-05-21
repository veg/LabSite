import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import hivtracegif from './data/images/carouselgifs/hivtrace.gif';
import liesergif from './data/images/carouselgifs/lieser.gif';
import datamonkeygif from './data/images/carouselgifs/datamonkey.gif';
import visiongif from './data/images/carouselgifs/vision.gif';
import msagif from './data/images/carouselgifs/msa.gif';


const items = [
  {
    src: hivtracegif,
    altText: 'HIV Trace',
    caption: 'HIV Trace'
  },
  {
    src: liesergif,
    altText: 'Ancestral sequence structural viewer',
    caption: 'Ancestral sequence structural viewer'
  },
  {
    src: visiongif,
    altText: 'HyPhyVision',
    caption: 'HyPhyVision'
  },
  {
    src: msagif,
    altText: 'jsav',
    caption: 'jsav'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
/*
  {
    src: datamonkeygif,
    altText: 'Datamonkey',
    caption: 'Datamonkey'
  },
  */
