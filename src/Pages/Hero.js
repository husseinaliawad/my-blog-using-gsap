import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

const HeroText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  opacity: 0;
  transform: translateY(50px);
`;

const HeroButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  opacity: 0;
  transform: translateY(50px);
  cursor: pointer;
`;

const Hero = () => {
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      heroButtonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );
  }, []);

  return (
    <HeroSection>
      <div>
        <HeroText ref={heroTextRef}>Welcome to Our Website</HeroText>
        <HeroButton ref={heroButtonRef}>Get Started</HeroButton>
      </div>
    </HeroSection>
  );
};

export default Hero;