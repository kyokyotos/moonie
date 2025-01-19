import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('/moonie/imgs/background.jpg'); /* Update the path */
    background-size: cover; /* Makes the image cover the entire screen */
    background-repeat: no-repeat; /* Ensures the image doesn't repeat */
    background-position: center; /* Centers the image */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const HeaderText = styled.h1`
  font-family: 'Bradley Hand ITC', cursive;
  font-size: 48px;
  font-weight: bold;
  color: rgb(2, 39, 15);
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const SubText = styled.h2`
  font-family: 'Ink Free', cursive;
  font-size: 25px;
  font-weight: bold;
  color: rgb(49, 48, 67);
  text-align: right;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  position: relative;
`;

interface ButtonProps {
  $position?: { x: number; y: number };
}

const Button = styled.button<ButtonProps>`
  background-color:rgb(6, 23, 60);
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: ${props => props.$position ? 'absolute' : 'relative'};
  left: ${props => props.$position ? `${props.$position.x}px` : 'auto'};
  top: ${props => props.$position ? `${props.$position.y}px` : 'auto'};

  &:hover {
    background-color: #FAF9F6;
  }
`;

const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

const GifInCorner = styled.img`
  position: absolute;
  max-width: 150px;
  border-radius: 10px;
`;

const ValentinePage: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();  // Add this hook

  const handleNoButtonHover = () => {
    const buttonWidth = 164;  // Button width (padding + font size)
    const buttonHeight = 39;  // Button height (padding)

    // Calculate the maximum X and Y positions to ensure the button stays within the viewport
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Generate random positions within the limits of the page
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    navigate('/yes');  // Changed from window.location.href
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderText>Please please do me the honor of being my valentine?</HeaderText>
        <SubText>Pretty please youre the sexiest prettiest girl ever 🥺</SubText>
        
        {/* GIFs in four corners */}
        <GifInCorner
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGU2MW10a29temlvcWEwYXVrYWZ4dnpkOGx2anlmdG1ybWhqcWRiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dcsYjfAhzlJJX86cT2/giphy.gif"
          alt="Cute animated illustration"
          style={{ top: -150, left: -200 }}
        />
        <GifInCorner
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXEwZm9mYTVzODJ2d2J1b3hjNml6OGhrM25ndG54NHNvbHA2bG4xayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OxDdkAf8O2AGv7sMOh/giphy.gif"
          alt="Cute animated illustration"
          style={{ top: -155, right: -200 }}
        />
        <GifInCorner
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGFmOGYzN2FyOTJzdXJlejdiemV6M3h6ajJpcGplaXIzbWVyZGY2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vWRVoN1kdk7h6jdiMl/giphy.gif"
          alt="Cute animated illustration"
          style={{ bottom: -155, left: -200 }}
        />
        <GifInCorner
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWV4YnY4N29rajEwbzMwM2hvZ2tub25zYWswMWMza2g0ZmV2a3EzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/tXxdVrLSgtA2wNjdgK/giphy.gif"
          alt="Cute animated illustration"
          style={{ bottom: -155, right: -200 }}
        />

<GifInCorner
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWh0bmJsZGtoNnhlcTJ6d2Joa2RmbjlpZ2QyNWY3bGc2eWY1bGdpeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W1cWdto4s7hWyRvTzm/giphy.gif"
          alt="Cute animated illustration"
          style={{ bottom: 10, right: 20 }}
        />
        
        <GifInCorner
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnRlNGJqZGJybTJlNDV3bGo0NnNjdHh6cWZ1dTVvbmh2NWdzM3prayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hvq8YVozeaTH2huTJX/giphy.gif"
          alt="Cute animated illustration"
          style={{ top: 70, left: 20 }}
        />
        
        <GifContainer>
          <img 
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjU5amExbGk4eGlucWF0ZmhlcmNnODBiMTN4ZXR6Y3l0N3dpM3BwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hmSXoiieHQX6Ix0AdW/giphy.gif"
            alt="Cute animated illustration"
            style={{ maxWidth: '250px', borderRadius: '10px' }}
          />
        </GifContainer>
        
        <ButtonContainer>
          <Button 
            onClick={handleYesClick}
            style={{ marginRight: '150px' }}
          >
            Yes, I'd love to! ❤️
          </Button>
          
          <Button
            onMouseEnter={handleNoButtonHover}
            $position={noButtonPosition}
            style={{ marginLeft: '150px' }}
          >
            No thanks :/
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ValentinePage;
