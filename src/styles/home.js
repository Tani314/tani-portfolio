import styled from 'styled-components'

export const HomeWrapper = styled.div`
width: 100%;
height:100%;
display:block
`
export const Can = styled.div`
height: 100%;
min-height : 200vh;

`
export const CanvasWrapper = styled.div`
position: relative;
width: 100%;
height:100%;
`

export const HomeText = styled.div`
position: absolute;
z-index: 999;
margin: 0 auto;
left: 0;
right: 0;
top: 40%; /* Adjust this value to move the positioned div up and down */
text-align: center;
width: 60%;
color: white;
font-size: 40px;
animation-name: example;
animation-duration: 4s;
`

export const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 0.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;
