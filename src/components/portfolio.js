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
  ImgP
} from "../styles/portfolio";
import Pizza from "../assets/Pizza.jpg";
import GraceShopper from "../assets/GraceShopper.jpg";
import GetTested from "../assets/Get-Tested.jpg";
import Exit from "../assets/Exit.jpg";
import Armor from "../assets/Armor.gif";

const Portfolio = props => {

  return (
    <div id='portfolio' >
    <SectionWrapper>
      <Wrapper>
        <Title>Projects</Title>
        <HR />
        <ImageColumn>
          <ImageContain>
            <Image src={Pizza} />
            <ImageMid>
              <ImgText>PizzaNow</ImgText>
              <ImgP>Pizza NOW is web application that allows users to report domestic violence, disguised as a pizza delivery app</ImgP>
              <a href="http://pizza-now.herokuapp.com/">
                    <Button>View Site</Button>
                  </a>

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={Exit} />
            <ImageMid>
              <ImgText>Exit</ImgText>
              <ImgP>Exit is an escape room game compatible with web, mobile and VR platforms that allows users to explore the room by enabling camera movement in 360 environment, search for and solve clues by interacting with the objects to escape the room.</ImgP>

              <a href="https://stormlooper.github.io/Exit/">
                    <Button>View Site</Button>
                  </a>

            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={GraceShopper} />
            <ImageMid>
              <ImgText>GraceShopper</ImgText>
              <ImgP>GraceShopper is an e-commerce website where guests and user can purchase groceries</ImgP>
              <a href="https://graceshopper-captn-thunk.herokuapp.com/">
                    <Button>View Site</Button>
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
<ImgP>Native mobile app renders dragon in augmented reality and allows users to interact with the dragon to trigger animations.</ImgP>
<a href="https://github.com/Tani314/Armor-Wing">
                    <Button>View Site</Button>
                  </a>
            </ImageMid>
          </ImageContain>

          <ImageContain>
            <Image src={GetTested} />
            <ImageMid>
              <ImgText>Get-Tested</ImgText>
<ImgP>Get Tested COVID-19 is an open-source application which allows users to search for nearby Covid testing centers</ImgP>
<a href="https://get-tested-covid19.org/">
                    <Button>View Site</Button>
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
