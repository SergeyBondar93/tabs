import React from "react";
import styled, { keyframes } from "styled-components";


const anim1 = keyframes`
  0% {
    margin-top: 0px;
    margin-left: 300px;
  }
  15% {
    margin-top: 200px;
    margin-left: 300px;
    transform: rotate(0deg);
  }
  30% {
    margin-top: 200px;
    margin-left: 300px;
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(90deg);
    margin-top: 200px;
    margin-left: 300px;
  }
  50% {
    transform: rotate(90deg);
    margin-top: 200px;
    margin-left: 300px;
  }
  58% {
    transform: rotate(90deg);
    margin-top: 300px;
    margin-left: 300px;
  }

  70% {
    margin-top: 100px;
    margin-left: 300px;
    transform: rotate(90deg);
  }
  80% {
    margin-top: 100px;
    margin-left: 300px;
    transform: rotate(450deg);
  }
  100% {
    margin-top: 0px;
    margin-left: 300px;
    transform: rotate(450deg);
  }
`;
const anim2 = keyframes`
  0% {
    margin-top: 400px;
    margin-left: 0px;
  }
  15% {
    margin-top: 400px;
    margin-left: 200px;
    transform: rotate(0deg);
  }
  30% {
    margin-top: 400px;
    margin-left: 200px;
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(90deg);
    margin-top: 400px;
    margin-left: 200px;
  }
  50% {
    transform: rotate(90deg);
    margin-top: 400px;
    margin-left: 200px;
  }
  58% {
    transform: rotate(90deg);
    margin-top: 400px;
    margin-left: 300px;
  }

  70% {
    margin-top: 400px;
    margin-left: 100px;
    transform: rotate(90deg);
  }
  80% {
    margin-top: 400px;
    margin-left: 100px;
    transform: rotate(450deg);
  }
  100% {
    margin-top: 400px;
    margin-left: 0px;
    transform: rotate(450deg);
  }
`;

const anim3 = keyframes`
  0%{
    margin-top: 0px;
    margin-left: 0px;
    transform: rotate(0deg);
  }
  10%{
    margin-top: 300px;
    margin-left: 0px;
    transform: rotate(0deg);
  }
  20%{
    margin-top: 300px;
    margin-left: 0px;
    transform: rotate(90deg);
  }
  30%{
    margin-top: 300px;
    margin-left: 100px;
    transform: rotate(90deg);
  }
  40%{
    margin-top: 300px;
    margin-left: 200px;
    transform: rotate(90deg);
  }
  60%{
    margin-top: 300px;
    margin-left: 200px;
    transform: rotate(270deg);
  }
  68%{
    margin-top: 100px;
    margin-left: 200px;
    transform: rotate(270deg);
  }
  75%{
    margin-top: 0px;
    margin-left: 200px;
    transform: rotate(270deg);
  }
  83%{
    margin-top: 0px;
    margin-left: 200px;
    transform: rotate(270deg);
  }
  91%{
    margin-top: 0px;
    margin-left: 100px;
    transform: rotate(90deg);
  }
  100%{
    margin-top: 0px;
    margin-left: 0px;
    transform: rotate(90deg);
  }
`

const anim4 = keyframes`
  0% {
    margin-top: 0px;
    margin-left: 700px;
  }
  15% {
    margin-top: 200px;
    margin-left: 400px;
    transform: rotate(0deg);
  }
  30% {
    margin-top: 200px;
    margin-left: 400px;
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(90deg);
    margin-top: 200px;
    margin-left: 400px;
  }
  50% {
    transform: rotate(90deg);
    margin-top: 200px;
    margin-left: 400px;
  }
  58% {
    transform: rotate(90deg);
    margin-top: 300px;
    margin-left: 400px;
  }

  70% {
    margin-top: 100px;
    margin-left: 400px;
    transform: rotate(90deg);
  }
  80% {
    margin-top: 100px;
    margin-left: 400px;
    transform: rotate(450deg);
  }
  100% {
    margin-top: 0px;
    margin-left: 400px;
    transform: rotate(450deg);
  }
`;



const anim5 = keyframes`
  0%{
    margin-top: 700px;
    margin-left: 400px;
    transform: rotate(0deg);
  }
  10%{
    margin-top: 500px;
    margin-left: 400px;
    transform: rotate(0deg);
  }
  20%{
    margin-top: 400px;
    margin-left: 400px;
    transform: rotate(90deg);
  }
  30%{
    margin-top: 400px;
    margin-left: 500px;
    transform: rotate(90deg);
  }
  40%{
    margin-top: 400px;
    margin-left: 500px;
    transform: rotate(90deg);
  }
  60%{
    margin-top: 400px;
    margin-left: 500px;
    transform: rotate(270deg);
  }
  68%{
    margin-top: 400px;
    margin-left: 600px;
    transform: rotate(270deg);
  }
  75%{
    margin-top: 400px;
    margin-left: 500px;
    transform: rotate(270deg);
  }
  83%{
    margin-top: 700px;
    margin-left: 500px;
    transform: rotate(270deg);
  }
  91%{
    margin-top: 700px;
    margin-left: 600px;
    transform: rotate(90deg);
  }
  100%{
    margin-top: 700px;
    margin-left: 700px;
    transform: rotate(90deg);
  }
`





const Block = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  transform-origin: center;
  border-radius: 25px;
`

const Block1 = styled(Block)`
  background-color: red;
  animation: ${anim1} 2.5s ease-out infinite;
`;

const Block2 = styled(Block)`
  background-color: green;
  animation: ${anim2} 4s ease-out infinite;
`;

const Block3 = styled(Block)`
  background-color: yellow;
  animation: ${anim3} 5s ease-out infinite;
`;
const Block4 = styled(Block)`
  background-color: orange;
  animation: ${anim4} 3s ease-out infinite;
`;
const Block5 = styled(Block)`
  background-color: lightblue;
  animation: ${anim5} 3.5s ease-out infinite;
`;




const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid #ccc;
  margin: 2% auto;
`





export const TabTwo = () => {
  return (
    <Wrapper>
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
    </Wrapper>
  );
};
