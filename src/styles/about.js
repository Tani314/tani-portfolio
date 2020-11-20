import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
background-color: rgb(238, 235, 235);
max-width: 100%;
flex-direction: column;
@media (max-width: 1024px) {
  mabvqa  x-width: 100%;
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
flex-wrap:wrap;
@media (max-width: 768px) {
 flex-direction:column;
}
`;

export const Me = styled.div`
display: flex;
flex: 1 0 0%;
flex-direction: column;
`
export const Heading = styled.div`
  text-align: center;
  padding: 15px;
  font-weight: bold;
  font-size: 25px;
  color: #444649;
`;

export const Paragraph = styled.div`
  display: flex;
  line-height: 1.6;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom:10px;
`;
export const Link = styled.div`
  color: purple;
  text-align: center;

`;

export const Image = styled.img`
display:block;
  float:left;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  padding-left:70px;
  width: 200px;
  height: 260px;
  @media (max-width: 768px) {
    padding:0px;
   }
`;

//MINWIDTH
