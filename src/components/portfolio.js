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

import Modal from "./modal";
import OpenModalButton from "./modalButton";
import { ModalContent, Descrip } from "../styles/modal";

const Portfolio = props => {
  const [isOpen, toggle] = useState(false);

  function handleOpenModal(open) {
    console.log("close modal");
    toggle(open);
  }

  return (
    <SectionWrapper>
      <Wrapper>
        <Title>Projects</Title>
        <HR />
        <ImageColumn>
          <ImageContain>
            <Image src={Pizza} />
            <ImageMid>
              <ImgText>PizzaNow</ImgText>

              <OpenModalButton handleClick={() => handleOpenModal(true)}>
                Learn More
              </OpenModalButton>

              <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
                <ModalContent>
                  <h3> Modal </h3>
                  <a href="http://pizza-now.herokuapp.com/">
                    <Text>View Site</Text>
                  </a>
                </ModalContent>
              </Modal>

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={GraceShopper} />
            <ImageMid>
              <ImgText>GraceShopper</ImgText>

              <OpenModalButton handleClick={() => handleOpenModal(true)}>
                Learn More
              </OpenModalButton>

              <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
                <ModalContent>
                  <h3> Modal </h3>
                  <a href="https://graceshopper-captn-thunk.herokuapp.com/">
                    <Text>View Site</Text>
                  </a>
                </ModalContent>
              </Modal>

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={Exit} />
            <ImageMid>
              <ImgText>Exit</ImgText>

              <OpenModalButton handleClick={() => handleOpenModal(true)}>
                Learn More
              </OpenModalButton>

              <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
                <ModalContent>
                  <h3> Modal </h3>
                  <a href="https://stormlooper.github.io/Exit/">
                    <Text>View Site</Text>
                  </a>
                </ModalContent>
              </Modal>

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={GetTested} />
            <ImageMid>
              <ImgText>Get-Tested</ImgText>

              <OpenModalButton handleClick={() => handleOpenModal(true)}>
                Learn More
              </OpenModalButton>

              <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
                <ModalContent>
                  <Descrip> Modal </Descrip>
                  <a href="https://get-tested-covid19.org/">
                    <Text>View Site</Text>
                  </a>
                </ModalContent>
              </Modal>

            </ImageMid>
          </ImageContain>
        </ImageColumn>
      </Wrapper>
    </SectionWrapper>
  );
};
export default Portfolio;
