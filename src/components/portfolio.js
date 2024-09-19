import React from "react";
import { SectionWrapper } from "../styles/sameStyle";
import {
  Wrapper,
  HR,
  Title,
  Image,
  ImageMid,
  Button,
  ImgText,
  ImageContain,
  ImageColumn,
  ImgP,
} from "../styles/portfolio";
import Task from "../assets/Task.png";
import Pizza from "../assets/Pizza.jpg";
import GraceShopper from "../assets/GraceShopper.jpg";
import GetTested from "../assets/Get-Tested.jpg";
import Exit from "../assets/Exit.jpg";
import Armor from "../assets/Armor.gif";

const Portfolio = (props) => {
  return (
    <div id="portfolio">
      <SectionWrapper>
        <Wrapper>
          <Title>Projects</Title>
          <HR />
          <ImageColumn>
            <ImageContain>
              <Image src={Task} />
              <ImageMid>
                <ImgText>Task Manager</ImgText>
                <ImgP>
                  Task Manager is a web application designed to streamline task
                  management. It enables users to efficiently organize, track,
                  and monitor the progress of their tasks, providing a
                  comprehensive overview of their productivity and project
                  advancements.
                </ImgP>
                <a href="https://github.com/Tani314/Task-Manager">
                  <Button>View Code</Button>
                </a>
              </ImageMid>
            </ImageContain>
            <ImageContain>
              <Image src={Pizza} />
              <ImageMid>
                <ImgText>PizzaNow</ImgText>
                <ImgP>
                  Pizza NOW is a web application designed to provide a discreet
                  platform for reporting domestic violence. It cleverly
                  disguises itself as a pizza delivery app, offering a safe and
                  confidential means for users to seek help.
                </ImgP>
                <a href="https://github.com/pizza-now/earthxhack20">
                  <Button>View Code</Button>
                </a>
              </ImageMid>
            </ImageContain>

            <ImageContain>
              <Image src={Exit} />

              <ImageMid>
                <ImgText>Exit</ImgText>
                <ImgP>
                  Exit is an immersive escape room game compatible with web,
                  mobile, and VR platforms. It allows players to explore a fully
                  interactive 360-degree environment, search for and solve
                  clues, and interact with objects to ultimately escape the
                  room.
                </ImgP>

                <a href="https://stormlooper.github.io/Exit/">
                  <Button>View Code</Button>
                </a>
              </ImageMid>
            </ImageContain>

            <ImageContain>
              <Image src={GraceShopper} />
              <ImageMid>
                <ImgText>GraceShopper</ImgText>
                <ImgP>
                  GraceShopper is an intuitive e-commerce website where both
                  guests and registered users can easily browse and purchase
                  groceries. It offers a seamless shopping experience with a
                  user-friendly interface.
                </ImgP>
                <a href="https://github.com/Captain-Thunk-Grace-Shopper/Grace-Shopper">
                  <Button>View Code</Button>
                </a>
              </ImageMid>
            </ImageContain>

            <ImageContain>
              <Image src={Armor} />
              <ImageMid>
                <ImgText>Armor-Wing</ImgText>
                <ImgP>
                  Armor-Wing is a native mobile app that brings a dragon to life
                  through augmented reality. Users can interact with the dragon
                  to trigger various animations and experiences, enhancing their
                  engagement with the virtual creature.
                </ImgP>
                <a href="https://github.com/Tani314/Armor-Wing">
                  <Button>View Code</Button>
                </a>
              </ImageMid>
            </ImageContain>

            <ImageContain>
              <Image src={GetTested} />
              <ImageMid>
                <ImgText>Get-Tested</ImgText>
                <ImgP>
                  Get Tested COVID-19 is an open-source application designed to
                  help users locate nearby COVID-19 testing centers. It provides
                  up-to-date information on testing locations to facilitate easy
                  access to testing services.
                </ImgP>
                <a href="https://get-tested-covid19.org/">
                  <Button>View Code</Button>
                </a>
              </ImageMid>
            </ImageContain>
          </ImageColumn>
        </Wrapper>
      </SectionWrapper>
    </div>
  );
};
export default Portfolio;
