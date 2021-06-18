import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  height: 50vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0%;
  right: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
    width: 100%;
  }
  border-radius: 1rem;
  z-index: 20;
  a {
    font-size: calc(1.3rem + 0.6vw);
    padding: 2rem 0;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ children, open }) => {
  return <StyledMenu open={open}>{children}</StyledMenu>;
};

export default Menu;
