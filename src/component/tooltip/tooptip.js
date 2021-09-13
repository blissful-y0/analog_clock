import styled from "styled-components";

export const Tooltip = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToolTipText = styled.span`
  position: absolute;
  top: 120px;
  visibility: hidden;
  background-color: red;
  padding: 5px;
  opacity: 0;
  transition: all 0.5s;
`;
