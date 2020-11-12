import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

`;

export const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
  &:hover { background: #663399;
     }
`;

export const HomeText = styled.div`
display: inline-block;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50%;
  text-align: center;
  width: 60%;
  font-size: 40px;
`;

