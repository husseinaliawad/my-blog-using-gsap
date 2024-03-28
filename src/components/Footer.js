import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff; /* Set background color to white */
  color: #333;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; 2024 YourCompany. All rights reserved.</FooterText>
        <div>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;