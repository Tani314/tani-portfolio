import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin-top:5%;
margin-bottom:5%;
margin-left:10%;
margin-right:10%;
padding-bottom: 50px;
  flex-direction: column;
  @media (max-width: 1024px) {

    align-items: center;
    padding: 0px;
  }
`;
export const Title = styled.div`
  display: block;
  padding-top: 70px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 43px;
  align-self: center;
  color: #444649;
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
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  max-width:50%;
  padding-left:40px;
  padding-bottom: 60px;
  @media (max-width: 1200px) {
    max-width:100%;
    padding-bottom: 5px;
  }
`;


export const MainGroup= styled.div`
display: flex;
  flex-direction: row;
  flex: 1 0 0%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Heading = styled.div`
  text-align: center;
  padding: 15px;
  font-weight: bold;
  font-size: 25px;
  color: #444649;
  font-family: "HelveticaNeue-Light";
`;

export const Paragraph = styled.div`
  display: flex;
  font-family: "HelveticaNeue-Light";
  line-height: 1.6;
  padding-left: 30px;
  padding-right: 50px;
  padding-bottom: 10px;
`;
export const Link = styled.div`
  color: purple;
  text-align: center;
  font-size: 20px;
  font-family: "HelveticaNeue-Light";
  :hover {
    color: #117611;
  }
`;

export const Image = styled.img`
  display: block;
  float: left;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 260px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

//MINWIDTH
