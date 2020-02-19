import React from "react";

// import { Container } from './styles';

const Header = ({ onToggleDarkTheme }) => (
  <div>
    Header <button onClick={onToggleDarkTheme}>tema</button>
  </div>
);

export default Header;
