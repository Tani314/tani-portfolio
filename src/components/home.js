import React from "react";
import { SectionWrapper } from "../styles/sameStyle";
import { CanvasWrapper, HomeWrapper, HomeText } from "../styles/home";
import { Geom, Pt, Line, Const, Group, Num } from "pts/dist/es5";
import { QuickStartCanvas } from "react-pts-canvas";
import "../styles/home.css";

const Home = () => {
  return (
    <div id="home">
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
              <div className="title">
                <div className="block"></div>
                <div className="p1">
                  <div className="p3">Hello, I'm </div>Nuzhat Tabassum Tani
                  <div className="span1"></div>
                </div>
              </div>
              <div className="role">
                <div className="block2"></div>
                <div className="p2">I'm a Full-Stack Software Engineer.</div>
              </div>
              <a href="#about" className="clickme">
                <span>View my site &#8594;</span>
              </a>
            </HomeText>
          </CanvasWrapper>
        </HomeWrapper>
      </SectionWrapper>
    </div>
  );
};

export default Home;
