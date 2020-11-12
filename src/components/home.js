import React from "react";
import { SectionWrapper } from "../styles/sameStyle";
import { CanvasWrapper, HomeWrapper, HomeText, Button } from "../styles/home";
import { Geom, Pt, Line, Const, Group, Num } from "pts/dist/es5";
import { QuickStartCanvas } from "react-pts-canvas";
import "../styles/home.css";

const Home = props => {
  return (
    <SectionWrapper>
      <HomeWrapper>
        <CanvasWrapper>
          <QuickStartCanvas
            background="#0A0A29"
            style={{ height: 135 + "vh" }}
            onAnimate={(space, form, time, ftime) => {
              // create a line and get 200 interpolated points
              let offset = space.size.$multiply(0.2).y;
              let line = new Group(
                new Pt(0, offset),
                new Pt(space.size.x, space.size.y - offset)
              );
              let pts = Line.subpoints(line, 200);

              // get perpendicular unit vectors from each points on the line
              let pps = pts.map(p =>
                Geom.perpendicular(p.$subtract(line[0]).unit()).add(p)
              );

              let angle = (space.pointer.x / space.size.x) * Const.two_pi * 2;

              // draw each perpendicular like a sine-wave
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
            <div class="title">
              <span1 class="block"></span1>
              <p1>
                Hello, I'm Nuzhat Tabassum Tani<span1></span1>
              </p1>
            </div>

            <div class="role">
              <div class="block2"></div>
              <p>I'm a full-stack web developer.</p>
            </div>

            <Button>View my site &#8594;</Button>
          </HomeText>
        </CanvasWrapper>
      </HomeWrapper>
    </SectionWrapper>
  );
};
export default Home;
