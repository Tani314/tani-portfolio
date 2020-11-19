import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
display :block;
position: fixed; /* Stay in place */
z-index: 9999; /* Sit on top */
left: 0;
top: 0;
width: 100vh;
height: 100vh;/* Full height */
padding-top: 100px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;


`;
export const ModalContainer = styled(motion.div)`
width: 100%;
height: 100%;
position: relative;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 100;
`;

export const CloseButton = styled.svg`
width: 15px;
height: 15px;
position: absolute;
right: 10px;
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
background-color: #fefefe;
margin: auto;
padding: 20px;
border-radius: 4px;
max-width: 300px;
height: 450px;

`;

export const  Descrip = styled.div`
font-family: "Montserrat", sans-serif;
font-weight: 300;
text-align: center;
`
