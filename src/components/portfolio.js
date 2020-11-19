import React, { useState } from "react";
import { SectionWrapper } from "../styles/sameStyle";
import {
  Wrapper,
  HR,
  Title,
  Image,
  ImageMid,
  Text,
  ImgText,
  ImageContain,
  ImageColumn
} from "../styles/portfolio";
import Pizza from "../assets/Pizza.jpg";
import GraceShopper from "../assets/GraceShopper.jpg";
import GetTested from "../assets/Get-Tested.jpg";
import Exit from "../assets/Exit.jpg";
import Armor from "../assets/Armor.gif";
import Modal from "./modal";
import OpenModalButton from "./modalButton";
import { ModalContent, Descrip } from "../styles/modal";

const Portfolio = props => {
  const [isOpen, toggle] = useState(false);

  function handleOpenModal(open) {
    console.log("close modal");
    toggle(open);
    setTimeout(function() {
       ModalContent.style= {overflow: 'hidden'}
       SectionWrapper.style= {display: 'none'}
       ImageColumn.style= {opacity:'0'}
    }, 100);
  }

  return (
    <div id='portfolio'>
    <SectionWrapper>
      <Wrapper>
        <Title>Projects</Title>
        <HR />
        <ImageColumn>
          <ImageContain>
            <Image src={Pizza} />
            <ImageMid>
              <ImgText>PizzaNow</ImgText>
              <ImgText>Pizza NOW is web application that allows users to report domestic violence, disguised as a pizza delivery app</ImgText>
              <a href="http://pizza-now.herokuapp.com/">
                    <Text>View Site</Text>
                  </a>

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={Exit} />
            <ImageMid>
              <ImgText>Exit</ImgText>
              <ImgText>Exit is a virtual reality escape room game compatible with web, mobile and VR platforms that allows users to explore the room by enabling camera movement in 360 environment, search for and solve clues by interacting with the objects to escape the room.</ImgText>

              <a href="https://stormlooper.github.io/Exit/">
                    <Text>View Site</Text>
                  </a>

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={GraceShopper} />
            <ImageMid>
              <ImgText>GraceShopper</ImgText>
              <ImgText>GraceShopper is an e-commerce website where guests and user can purchase groceries</ImgText>
              <a href="https://graceshopper-captn-thunk.herokuapp.com/">
                    <Text>View Site</Text>
                  </a>

              {/* <OpenModalButton handleClick={() => handleOpenModal(true)}>
                Learn More
              </OpenModalButton>

              <Descrip>
              <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
                <ModalContent>
                  <h3> GraceShopper </h3>

                <p>GraceShopper is an e-commerce website where guests and user can purchase groceries</p>
                  <a href="https://graceshopper-captn-thunk.herokuapp.com/">
                    <Text>View Site</Text>
                  </a>
                </ModalContent>
              </Modal>
              </Descrip> */}

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={Armor} />
            <ImageMid>
              <ImgText>Armor-Wing</ImgText>
<ImgText>Native mobile app renders dragon in augmented reality and allows users to interact with the dragon to trigger animations.</ImgText>
<a href="https://github.com/Tani314/Armor-Wing">
                    <Text>View Site</Text>
                  </a>
            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={GetTested} />
            <ImageMid>
              <ImgText>Get-Tested</ImgText>
<ImgText>Get Tested COVID-19 is an open-source application which allows users to search for nearby Covid testing centers</ImgText>
<a href="https://get-tested-covid19.org/">
                    <Text>View Site</Text>
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
