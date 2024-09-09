import React from "react";
import Skills from "./skills";
import IMG_2877 from "../assets/IMG_2877.jpeg";
import { SectionWrapper } from "../styles/sameStyle";
import {
  Wrapper,
  Title,
  Heading,
  Paragraph,
  HR,
  Image,
  Group,
  Link,
  MainGroup
} from "../styles/about";

const About = props => {
  return (
    //image
    <div id="about">
      <SectionWrapper>
        <Wrapper>
          <Title>ABOUT</Title>
          <HR />

<MainGroup>
          <Group>
            <Image src={IMG_2877} />
              <Heading>Who am I?</Heading>
              <Paragraph>
                I am a Full Stack Software Engineer based in Brooklyn, New York. I’m passionate about building scalable, user-centric applications. With experience in technologies like React, Node.js, and AI/ML systems, I love solving complex problems and creating impactful solutions. My focus is on delivering innovative, ethical technology that drives positive change. Outside of work, I’m always exploring new challenges and staying curious about the latest in tech.
              </Paragraph>
              <a href="#contact">
                <Link>Let's work together</Link>
              </a>
            </Group>

          <Skills />
          </MainGroup>
        </Wrapper>
      </SectionWrapper>
    </div>
  );
};
export default About;
