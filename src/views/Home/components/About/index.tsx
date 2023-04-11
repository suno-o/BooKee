import React from "react"
import Image from "next/image"
import styled from "styled-components"
import spendingIcon from "@/assets/icons/spending.png"
import goingIcon from "@/assets/icons/going.png"
import benefitIcon from "@/assets/icons/benefit.png"

const About: React.FC = () => (
  <Container>
    <AboutWrapper>
      <AboutBooKee>BooKee is not a platform that will magically grow your savings.</AboutBooKee>
      <Purpose>Its purpose is to introduce young adults a different methodology I use to stay on top of my spendings, and help them grow a habit of monthly bookkeeping.</Purpose>
    </AboutWrapper>

    <Heading>My principles</Heading>
    <Principles>
      <Principle>
        <IconWrapper bgTheme='primary'><Image src={spendingIcon} alt='Spend principle icon' width={28} height={28} /></IconWrapper>
        <Text>1. Spend wisely</Text>
      </Principle>
      <Principle>
        <IconWrapper bgTheme='secondary'><Image src={goingIcon} alt='Go principle icon' width={28} height={28} /></IconWrapper>
        <Text>2. Know where my money is going</Text>
      </Principle>
      <Principle>
        <IconWrapper bgTheme='failure'><Image src={benefitIcon} alt='Benefit principle icon' width={28} height={28} /></IconWrapper>
        <Text>3. Take advantages of benefits available</Text>
      </Principle>
    </Principles>
  </Container>
)

export default About;


/* styles */
const Container = styled.div`
  width: 100%;
`

const AboutWrapper = styled.div`
  text-align: center;
`

const AboutBooKee = styled.p`
  margin-bottom: 24px;
  font-size: 1.0rem;
  ${p => p.theme.mediaQueries.md} {
    font-size: 1.1rem;
  }
`

const Purpose = styled.p`
  margin-bottom: 16px;
  padding: 0 16px;
  font-size: 0.9rem;
  color: ${p => p.theme.colors.text_grey_light};

  ${p => p.theme.mediaQueries.md} {
    padding: 0 80px;
  }
`

const Heading = styled.p`
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 0.9rem;
  color: ${p => p.theme.colors.text_grey};
  text-align: center;
`

const Principles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  ${p => p.theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }
`

const Principle = styled.div`
  flex: 1;
  min-width: 260px;
  border-radius: 16px;
  box-shadow: ${p => p.theme.shadows.grey};
  padding: 16px;

  ${p => p.theme.mediaQueries.sm} {
    min-width: auto;
    box-shadow: none;
    padding: 0;
  }
`

const Text = styled.p`
  padding-top: 16px;
  text-align: center;
  font-weight: lighter;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.text_grey_light};

  ${p => p.theme.mediaQueries.md} {
    font-size: 0.9rem;
  }
`

const IconWrapper = styled.div<{bgTheme: string}>`
  border-radius: 50%;
  background-color: ${p => p.bgTheme && p.theme.colors[p.bgTheme]};
  width: 48px;
  height: 48px;
  margin: 0 auto;
  padding: 10px;
`