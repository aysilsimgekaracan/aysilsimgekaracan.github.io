import styled from "styled-components";
import React from "react";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.hamburgerMenu_bg};
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(100%)")};
  overflow: hidden
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  touch-action: none;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 20;
  @media (max-width: 576px) {
    width: 100%;
  }
  a {
    font-size: calc(1.3rem + 0.6vw);
    padding: 2rem 0;
    font-weight: 600;
    letter-spacing: 0.5rem;
    color:  ${({ theme }) => theme.hamburgerMenu_color};
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ children, open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu
      open={open}
      aria-hidden={!isHidden}
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </StyledMenu>
  );
};

export default Menu;
