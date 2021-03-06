import styled from "styled-components";

export const Clock = styled.div`
  display: inline-block;
  position: relative;
  border: 10px solid orange;
  width: 50vw;
  height: 50vw;
  margin: 0 auto;
  background-color: black;
  border-radius: 100%;
  &:hover {
    & + span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;

export const ClockFace = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border: 2px solid #fff;
  background-color: orange;
  border-radius: 100%;
  z-index: 100;
`;

export const Hours = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  outline: 2px solid #fff;
  width: 35%;
  transform-origin: 14%;
  transform: ${(props) => `rotate(${props.value}deg)`};
`;

export const Minutes = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  outline: 2px solid #fff;
  width: 50%;
  transform-origin: 10%;
  transform: ${(props) => `rotate(${props.value}deg)`};
`;

export const Seconds = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  outline: 2px solid red;
  width: 59%;
  transform-origin: 17%;
  transform: ${(props) => `rotate(${props.value}deg)`};
  transition: ${(props) =>
    props.value > 0 ? "transform 250ms ease-in-out" : "none"};
`;

export const Tooltip = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToolTipText = styled.span`
  position: absolute;
  top: 700px;
  visibility: hidden;
  background-color: red;
  padding: 5px;
  opacity: 0;
  transition: all 0.5s;
  font-size: 30px;
`;
