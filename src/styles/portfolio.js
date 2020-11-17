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
  max-width: 70%;
  flex-direction: column;
  @media (max-width: 1024px) {
    mabvqa  x-width: 100%;
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
padding-left: 90px;
display: flex;
flex-wrap: wrap;
align-content: center;
`
export const Image = styled.img`
opacity: 1;
  width: 400px;
  height: 250px;
  transition: .5s ease;
  backface-visibility: hidden;
`
export const ImageMid =styled.div`
transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
`
export const ImgText= styled.div`
font-weight:bold;
text-align: center;
padding-bottom: 20px;
`

export const Text = styled.div`
background-color: transparent;
  color: black;
  border: 2px solid black;
  font-size: 16px;
  padding: 5px 10px;
`
export const ImageContain = styled.div`
position: relative;
  padding:10px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${ImageMid} {
      opacity: 1;
    }
  }
  `



