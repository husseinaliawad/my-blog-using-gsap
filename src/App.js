
import styled from 'styled-components';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Hero from './Pages/Hero';
import React, { useState, useRef, useEffect } from 'react';

import { gsap } from 'gsap';

const NavigationContainer = styled.nav`
  background-color: #f2f2f2;
  padding: 10px;
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NavButton = styled.button`
  background-color: ${props => (props.isActive ? '#ccc' : 'transparent')};
  color: #000;
  border: none;
  padding: 10px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

const App = () => {
  const [page, setPage] = useState('home');
  const navButtonsRef = useRef([]);

  useEffect(() => {
    gsap.from(navButtonsRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.2,
    });
  }, []);

  const handleButtonClick = selectedPage => {
    gsap.to(navButtonsRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.1,
      onComplete: () => {
        setPage(selectedPage);
        gsap.fromTo(
          navButtonsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
          }
        );
      },
    });
  };

  return (
    <>
      <NavigationContainer>
        <NavButtonContainer>
          <NavButton
            ref={el => (navButtonsRef.current[0] = el)}
            isActive={page === 'home'}
            onClick={() => handleButtonClick('home')}
          >
            Home
          </NavButton>
          <NavButton
            ref={el => (navButtonsRef.current[1] = el)}
            isActive={page === 'about'}
            onClick={() => handleButtonClick('about')}
          >
            About
          </NavButton>
          <NavButton
            ref={el => (navButtonsRef.current[2] = el)}
            isActive={page === 'blog'}
            onClick={() => handleButtonClick('blog')}
          >
            Blog
          </NavButton>
          <NavButton
            ref={el => (navButtonsRef.current[3] = el)}
            isActive={page === 'hero'}
            onClick={() => handleButtonClick('hero')}
          >
            Hero
          </NavButton>
        </NavButtonContainer>
      </NavigationContainer>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'blog' && <Blog />}
      {page === 'hero' && <Hero />}
      <Footer />
    </>
  );
};

export default App;