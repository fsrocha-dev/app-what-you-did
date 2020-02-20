import React from "react";
import styled from "styled-components";

import logo from "./assets/logo.svg";
import check from "./assets/check.svg";
import IconButton from "./shared/IconButton.svg";

const Root = styled.header`
  background-color: ${p => p.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Logo = styled.img`
  margin-right: 1em;
  filter: ${p => p.theme.headerFilter};
`;

const Button = styled(IconButton)`
  filter: ${p => p.theme.headerFilter};
`;

const Header = ({ onToggleDarkTheme }) => (
  <Root>
    <Logo src={logo} alt="logo" />
    <Button
      iconUrl={check}
      iconAlt="check"
      onClick={onToggleDarkTheme}
    ></Button>
  </Root>
);

export default Header;
