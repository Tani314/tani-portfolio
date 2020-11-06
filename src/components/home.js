import React from 'react';

import { SectionWrapper } from '../styles/sameStyle';
import { CanvasWrapper, HomeWrapper, HomeText ,Button,Span, Block2, Block1,H1,P} from '../styles/home';

import { Circle, Create} from 'pts/dist/es5'
import {QuickStartCanvas} from 'react-pts-canvas'
// import Confetti from './canvas';
import '../styles/home.css'
 var pts = []
 var colors = ["#7948B8", "#800080", "#259025", "#fff"];




const Home = (props) => {
  return(
    <SectionWrapper>
      <HomeWrapper>
    <CanvasWrapper>

  {/* <Confetti background="#0A0A29"/> */}

<QuickStartCanvas background="#0A0A29" style={{height:100+ 'vh'}} onStart={(bound, space)=> {
 pts = Create.distributeRandom( space.innerBound, 700) }} onAnimate={(space,form,time, ftime) => {

  let r = Math.abs( space.pointer.x-space.center.x )/space.center.x * 250 + 90;
  let range = Circle.fromCenter( space.pointer, r );

  // check if each point is within circle's range
  for (let i=0, len=pts.length; i<len; i++) {

    if ( Circle.withinBound( range, pts[i] ) ) {

      // calculate circle size
      let dist = (r - pts[i].$subtract(space.pointer).magnitude() ) / r;
      let p = pts[i].$subtract( space.pointer ).scale( 1+dist ).add( space.pointer );
      form.fillOnly( colors[i%4] ).point( p, dist*25, "circle" );

    } else {
      form.fillOnly("#fff").point(pts[i], 0.5);
    }

  }
}} />


      <HomeText>

      <div class="title">
            <span class="block"></span>
            <p1>Hello, I'm Nuzhat Tabassum Tani<span></span></p1>
        </div>
<br/>
        <div class="role">
            <div class="block2"></div>
            <p>I'm a full-stack web developer.</p>
        </div>

<Button>View my site &#8594;</Button>
</HomeText>
</CanvasWrapper>
</HomeWrapper>
    </SectionWrapper>
  )
}
export default Home
