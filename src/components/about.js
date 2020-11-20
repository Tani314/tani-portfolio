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
  Me
} from "../styles/about";

const About = props => {
  return (
    //image
    <div id="about">
      <SectionWrapper>
        <Wrapper>
          <Title>ABOUT</Title>
          <HR />

          <Group>
            <Image src={IMG_2877} />
            <Me>
              <Heading>Who am I?</Heading>
              <Paragraph>
                I am a Full Stack Software Engineer based in Brooklyn, New York.
                I recently completed the immersive software engineering bootcamp
                at the Grace Hopper Program at Fullstack Academy. Currently, I
                am looking forward to being part of a diverse, innovative and
                inspiring team that values creativity and social change.
              </Paragraph>

              <a href="#contact">
                <Link>Lets work together</Link>
              </a>
            </Me>
          </Group>

          <Skills />
        </Wrapper>
      </SectionWrapper>
    </div>
  );
};
export default About;
