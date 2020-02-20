import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-top: 12px;
`;

const IconButton = props => (
  <Button>
    <img src={props.iconUrl} alt={props.iconAlt} />
  </Button>
);

export default IconButton;
