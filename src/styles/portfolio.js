import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 43px;
  align-self: center;
  color: #444649;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(238, 235, 235);
  max-width: 100%;
  flex-direction: column;
  @media (max-width: 1024px) {
    mabvqax-width: 100%;
    align-items: center;
    padding: 0px;
  }
`;

export const HR = styled.hr`
  display: block;
  align-self: center;
  height: 10px;
  width: 80px;
  border: 0;
  border-top: 4px solid #444649;
  margin: 0.5em 0;
  padding-bottom: 60px;
`;
export const ImageColumn = styled.div`
  padding-left: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  @media (max-width: 768px) {
    padding-left: 1%;
  }
`;
export const Image = styled.img`
  opacity: 1;
  width: 600px;
  height: 440px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  @media (max-width: 1400px) {
    width: 500px;
    height: 340px;
  }
  @media (max-width: 1200px) {
    width: 400px;
    height: 240px;
  }
`;

export const ImageMid = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 80%;
`;
export const ImgText = styled.div`
  font-weight: bold;
  font-family: "HelveticaNeue-Light";
  color: #363535;
  text-align: center;
  padding-bottom: 10px;
  font-size: 25px;
  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;

export const ImageContain = styled.div`
  position: relative;
  background-color: #ddd;
  padding: 2px;
  z-index: 1;
  &:hover {
    ${Image} {
      opacity: 0;
    }
    ${ImageMid} {
      opacity: 1;
    }
  }
`;
export const Button = styled.button`
  color: #363535;
  font-weight: bold;
  margin-left: 35%;
  font-family: "HelveticaNeue-Light";
  background-color: transparent;
  font-size: 20px;
  padding: 5px 11px;
  margin-top: 20px;
  border: 3px solid #b018b0;
  &:hover {
    background: #b018b0;
    color: white;
  }
  @media (max-width: 1400px) {
    font-size: 15px;
    padding: 3px 9px;
    margin-left: 35%;
  }
  @media (max-width: 768px) {
    margin-left: 30%;
  }
`;

export const ImgP = styled.div`
  display: flex;
  align-self: center;
  color: #363535;
  font-family: "HelveticaNeue-Light";
`;
