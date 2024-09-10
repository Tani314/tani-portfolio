import styled, { keyframes, css } from "styled-components";

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

// Keyframe animations
// Keyframe animations
const typewriter = keyframes`
from {
  width: 0;
}
to {
  width: 100%;
}
`;

const blink = keyframes`
from, to {
  border-color: transparent;
}
50% {
  border-color: white;
}
`;

const popIn = keyframes`
  0% {
    width: 0;
    height: 0;
    background: #ddd;
    border: 0 solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: white;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: white;
    border: 0px solid #222;
    bottom: 5px;
  }
`;

// Styled components
export const HomeText = styled.div`
  display: inline-block;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 40%;
  align-content: center;
  text-align: center;
  width: 60%;
  font-size: 40px;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 80%; /* Adjust width for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 30px; /* Smaller font size for small screens */
    width: 90%; /* Adjust width for small screens */
  }

  @media (max-width: 480px) {
    font-size: 24px; /* Even smaller font size for extra-small screens */
    width: 95%; /* Ensure it fits the screen */
    top: 35%; /* Adjust position if necessary */
  }
`;
export const Title = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto; /* Allow height to adjust based on content */
  margin-left: 27%;
  margin-bottom: 20px; /* Space between Title and Role */

  @media (max-width: 1024px) {
    margin-left: 15%; /* Adjust for medium screens */
  }

  @media (max-width: 768px) {
    margin-left: 10%; /* Adjust for small screens */
  }

  @media (max-width: 480px) {
    margin-left: 5%; /* Adjust for extra-small screens */
  }
`;
export const Lines = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Merriweather", serif;
  font-size: 29px;
  font-weight: bold;
  color: white;
  animation: ${({ animate }) =>
    animate &&
    css`
      ${typewriter} 4s steps(40, end) forwards,
  ${blink} 0.75s step-end infinite
    `};
  @media (max-width: 1024px) {
    font-size: 24px; /* Adjust font size for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Smaller font size for small screens */
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Span1 = styled.span`
  position: absolute;
  right: 0;
  color: white;
  bottom: 0;
  width: 7px;
  height: 7px;
  background: transparent;
  border-radius: 50%;
  animation: ${popIn} 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 3s; /* Adjust based on when you want it to appear */

  @media (max-width: 1024px) {
    width: 6px; /* Slightly smaller size for medium screens */
    height: 6px;
    right: 10px; /* Adjust position if necessary */
    bottom: 10px; /* Adjust position if necessary */
  }

  @media (max-width: 768px) {
    width: 5px; /* Smaller size for small screens */
    height: 5px;
    right: 5px; /* Adjust position if necessary */
    bottom: 8px; /* Adjust position if necessary */
  }

  @media (max-width: 480px) {
    width: 4px; /* Even smaller size for extra-small screens */
    height: 4px;
    right: 3px; /* Adjust position if necessary */
    bottom: 5px; /* Adjust position if necessary */
  }
`;

export const  ClickMe = styled.a(props => `
color: white;
background-color: transparent;
font-family: "Merriweather", serif;
font-size: 16px; /* Smaller font size for a compact appearance */
font-weight: bold;
margin-left: 100px;
margin-right: 10px;
padding: 10px 16px; /* Padding for a box-like appearance */
border: 3px solid white; /* Border to make it appear as a box */
border-radius: 12px; /* Rounded corners */
text-decoration: none; /* Remove underline */
display: inline-block; /* Ensures padding and border are applied correctly */
text-align: center; /* Center text inside the box */
  opacity: ${props.visible ? 1 : 0};
transition: opacity 1s ease; /* Smooth transition for appearance */

/* Make it visible after animations */

&:hover {
  background-color: #663399; /* Background color on hover */
}

&:hover span {
  display: none;
}

&:hover::before {
  content: "Learn more about me \\2193"; /* Updated hover content */
}
@media (max-width: 768px) {
  font-size: 14px; /* Smaller font size for small screens */
  padding: 8px 12px; /* Adjust padding for smaller screens */
  margin-left: 50px; /* Adjust margin for smaller screens */
}

@media (max-width: 480px) {
  font-size: 12px; /* Even smaller font size for extra-small screens */
  padding: 6px 10px; /* Adjust padding for extra-small screens */
  margin-left: 20px; /* Adjust margin for extra-small screens */
}
`);
