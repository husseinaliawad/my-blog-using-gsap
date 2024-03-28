import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const BlogContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const BlogTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const BlogPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BlogPost = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  margin: 0 10px 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const BlogPostTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const BlogPostSummary = styled.p`
  font-size: 14px;
  color: #666;
`;

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <BlogContainer>
      <BlogTitle>Latest Blog Posts</BlogTitle>
      <BlogPostContainer>
        <BlogPost style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
          <BlogPostTitle>Blog Post 1</BlogPostTitle>
          <BlogPostSummary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur gravida
            consectetur.
          </BlogPostSummary>
        </BlogPost>
        <BlogPost style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
          <BlogPostTitle>Blog Post 2</BlogPostTitle>
          <BlogPostSummary>
            Fusce consectetur, dui et commodo facilisis, mi metus volutpat risus, at facilisis
            lectus purus at justo.
          </BlogPostSummary>
        </BlogPost>
        <BlogPost style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
          <BlogPostTitle>Blog Post 3</BlogPostTitle>
          <BlogPostSummary>
            Nullam vulputate mauris nec tellus viverra efficitur. Nulla facilisi. Sed ut lectus in
            diam pellentesque eleifend.
          </BlogPostSummary>
        </BlogPost>
      </BlogPostContainer>
    </BlogContainer>
  );
};

export default Blog;