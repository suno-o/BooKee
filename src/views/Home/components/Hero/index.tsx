import React from "react"
import Image from "next/image"
import styled, { keyframes } from "styled-components"
import pig from "@/assets/images/pig.png"
import { Heading1 } from "@/components/Heading"

const Hero: React.FC = () => (
  <HeroContainer>
    <HeroContent>
      <Heading1>Start saving money like a pro</Heading1>
      <Text>A whole new approach to personal finance</Text>
    </HeroContent>
    <HeroImageWrapper>
      <StyledImage src={pig} alt='Hero image' />
    </HeroImageWrapper>
  </HeroContainer>
)

export default Hero;


/* styles */
const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 240px;

  ${p => p.theme.mediaQueries.md} {
    height: 400px;
  }
`

const HeroContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${p => p.theme.mediaQueries.md} {
    align-items: flex-start;
  }
`

const Text = styled.p`
  font-weight: lighter;
  font-size: 1rem;

  ${p => p.theme.mediaQueries.md} {
    font-size: 1.1rem;
  }
`

const HeroImageWrapper = styled.div`
  position: absolute;
  top: -30px;
  right: -16px;

  ${p => p.theme.mediaQueries.md} {
    position: static;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

const flying = () => keyframes`
  from {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(-2px);
  }
`

const StyledImage = styled(Image)`
  width: 100px;
  height: auto;
  animation: ${flying} 3s ease-in-out infinite;

  ${p => p.theme.mediaQueries.sm} {
    width: 120px;
  }

  ${p => p.theme.mediaQueries.md} {
    width: 180px;
  }

  ${p => p.theme.mediaQueries.lg} {
    width: 200px;
  }
`