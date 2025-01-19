import React, { useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('/imgs/wall.jpg'); /* Update the path */
    background-size: cover; /* Makes the image cover the entire screen */
    background-repeat: no-repeat; /* Ensures the image doesn't repeat */
    background-position: center; /* Centers the image */
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const heartBeat = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Bradley Hand ITC', bold;
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${heartBeat} 1.5s infinite;
`;

const GifContainer = styled.div`
  animation: ${floatAnimation} 3s infinite ease-in-out;
  margin: 2rem 0;
`;

const Message = styled.p`
  font-family: 'Ink Free', cursive;
  font-size: 1.5rem;
  color: white;
  max-width: 600px;
  line-height: 1.6;
  margin: 1rem 0;
`;

const Heart = styled.div`
  position: fixed;
  color: white;
  font-size: 2rem;
  animation: ${floatAnimation} 3s infinite ease-in-out;
  opacity: 0.6;
`;

const YesPage: React.FC = () => {
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Yipeeee</Title>
        
        <GifContainer>
          <img 
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazVtb3F3eDA2dnhuM2x0OHNsc2NkM216am9rM2k2c3JtbXc5MWduMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oCR2Nkr3LCUoM/giphy.gif"
            alt="Lilo and Stitch Celebration"
            style={{ borderRadius: '10px', maxWidth: '300px' }}
          />
        </GifContainer>

        <Message>
          Thats me in the corner right now loook!!!
        </Message>

        {/* Floating hearts background */}

        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            💙
          </Heart>
        ))}

      </Container>
    </>
  );
};

export default YesPage;