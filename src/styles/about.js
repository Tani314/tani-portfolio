import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70%;
  flex-direction: column;
  @media (max-width: 1024px) {
    mabvqa  x-width: 100%;
    align-items: center;
    padding: 0px;
    & > div {
      width: 100%;
    }
  }
`;
export const Title = styled.div`
  display: flex;
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
  padding: 0;
  padding-bottom: 60px;
`;
export const Group = styled.div`
  align-items: center;
`;

export const Heading = styled.div`
  text-align: center;
  padding: 15px;
  font-weight: bold;
  font-size: 25px;
  color: #444649;
`;

export const Paragraph = styled.div`
  display: flex;
  text-align: center;
  line-height: 1.6;
`;
export const Link = styled.div`
  color: purple;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 200px;
  height: 260px;
`;
export const Display = styled.div``;
//MINWIDTH
