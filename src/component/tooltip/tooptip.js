import styled from "styled-components";

export const Tooltip = styled.span`
  display: inline-block;
  color: deeppink;
  font-weight: bold;
`;

export const ToolTipText = styled.span`
  display: none;
  position: absolute;
  max-width: 300px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  font-size: 0.8em;
  color: white;
  background: deeppink;
`;
