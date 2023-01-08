import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      bottom: "40px",
      height: "20px",
      fontSize: "3rem",
      zIndex: "1",
      cursor: "pointer",
      color: "green",
    }}>
      <FaArrowCircleUp onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />
    </Button>
  );
}

export default ScrollButton;