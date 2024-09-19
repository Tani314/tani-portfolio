import React, { useState, useEffect } from 'react';
import { SectionWrapper } from "../styles/sameStyle";
import {
  CanvasWrapper,
  HomeWrapper,
  HomeText,
  Title, Span1, Lines, ClickMe, 
} from "../styles/home";
import { Geom, Pt, Line, Const, Group, Num } from "pts";
import { QuickStartCanvas } from "react-pts-canvas";

const Home = () => {
  const [animateLines, setAnimateLines] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    // Start the typewriter animation
    const timer1 = setTimeout(() => {
      setAnimateLines(true);
    }, 100);

    // Show the second line after the first line animation ends
    const timer2 = setTimeout(() => {
      setShowSecondLine(true);
    }, 4000); // Adjust the delay to match the duration of the typewriter effect

    // Show the button after both lines are done
    const timer3 = setTimeout(() => {
      setIsButtonVisible(true);
    }, 8000); // Adjust delay to be after both lines

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);


  return (
    <div>
      <SectionWrapper>
        <HomeWrapper>
          <CanvasWrapper>
            <QuickStartCanvas
              background="#0A0A29"
              style={{ height: "100vh" }}
              onAnimate={(space, form, time) => {
                let offset = space.size.$multiply(0.2).y;
                let line = new Group(
                  new Pt(0, offset),
                  new Pt(space.size.x, space.size.y - offset)
                );
                let pts = Line.subpoints(line, 200);

                let pps = pts.map((p) =>
                  Geom.perpendicular(p.$subtract(line[0]).unit()).add(p)
                );

                let angle = (space.pointer.x / space.size.x) * Const.two_pi * 2;

                pps.forEach((pp, i) => {
                  let t =
                    (i / 200) * Const.two_pi +
                    angle +
                    Num.cycle((time % 10000) / 10000);

                  if (i % 2 === 0) {
                    pp[0].to(
                      Geom.interpolate(pts[i], pp[0], Math.sin(t) * offset * 2)
                    );
                    pp[1].to(pts[i]);
                    form.stroke("#9C64F4", 1).line(pp);
                  } else {
                    pp[0].to(pts[i]);
                    pp[1].to(
                      Geom.interpolate(pts[i], pp[1], Math.cos(t) * offset * 2)
                    );
                    form.stroke("#0FA3A3", 1).line(pp);
                  }
                });
              }}
            />
            <HomeText>
                 {/* Title Section */}
                 <Title>
        <Lines animate={animateLines} >Hello, I'm Nuzhat Tabassum Tani</Lines>
        {showSecondLine && (
          <>   
          <Lines animate={animateLines}>
          I am a Full Stack Software Engineer
        </Lines>
   <Span1/>
   </>
       
        )}
     
      </Title>

      <ClickMe href="#about" visible={isButtonVisible}>
        <span>Learn More About Me &#8594;</span>
      </ClickMe>
            </HomeText>
          </CanvasWrapper>
        </HomeWrapper>
      </SectionWrapper>
    </div>
  );
};

export default Home;
