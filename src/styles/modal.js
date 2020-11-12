import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: white;
`;
export const ModalContainer = styled(motion.div)`
width: 50%;
height: 50%;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 12px;
`;
export const CloseButton = styled.svg`
width: 10px;
height: 10px;
position: absolute;
right: 5px;

cursor: pointer;
`;

export const OpenModalButton = styled(motion.button)`
background-color: transparent;
  font-size: 16px;
  padding: 5px 10px;
  border: 2px solid #5c3aff;
  color: black;
`;


export const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
display: flex;
flex-wrap: wrap;
padding : 10px;
background-color: blue;

`;

export const  Descrip = styled.div`
`
