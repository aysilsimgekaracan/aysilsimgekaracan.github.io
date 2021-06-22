import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const StyledCustomScrollButton = styled.div`
  position: fixed;
  width: 50px;
  right: 5%;
  bottom: 40px;
  height: 50px;
  z-index: 1;
  cursor: pointer;
  color: white;
  background-image: linear-gradient(
    rgb(63, 13, 153) 0%,
    rgb(81, 15, 168) 35%,
    rgb(124, 15, 168) 100%
  );
  border-radius: 15px;
  text-align: center;
  transition: all 1s linear;
`;

const CustomScrollButon = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <StyledCustomScrollButton
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <IoIosArrowUp size={40} />
    </StyledCustomScrollButton>
  );
};

export default CustomScrollButon;
