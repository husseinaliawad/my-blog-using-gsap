import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

const HomeContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Feature = styled(animated.div)`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  margin: 0 10px;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Home = () => {
  const features = [
    {
      id: 1,
      title: 'Feature 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur gravida consectetur.',
    },
    {
      id: 2,
      title: 'Feature 2',
      description:
        'Fusce consectetur, dui et commodo facilisis, mi metus volutpat risus, at facilisis lectus purus at justo.',
    },
    {
      id: 3,
      title: 'Feature 3',
      description:
        'Nullam vulputate mauris nec tellus viverra efficitur. Nulla facilisi. Sed ut lectus in diam pellentesque eleifend.',
    },
  ];

  const trail = useTrail(features.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  return (
    <HomeContainer>
      <Title>Welcome to Our Website</Title>
      <Subtitle>Discover the Best Features</Subtitle>
      <FeatureContainer>
        {trail.map((animation, index) => (
          <Feature key={features[index].id} style={animation}>
            <FeatureTitle>{features[index].title}</FeatureTitle>
            <FeatureDescription>{features[index].description}</FeatureDescription>
          </Feature>
        ))}
      </FeatureContainer>
    </HomeContainer>
  );
};

export default Home;