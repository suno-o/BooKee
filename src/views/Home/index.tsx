import Hero from "./components/Hero"
import About from "./components/About"
import Step1 from "./components/Steps/Step1"
import Step2 from "./components/Steps/Step2"
import PotentialUsers from "./components/PotentialUsers"
import TryNow from "./components/TryNow"
import { PageSection, PaddedInner } from "@/components/Layout/Page"
import { Heading2 } from "@/components/Heading"
import styled from "styled-components"

export default function Home () {
  return (
    <>
      {/* hero */}
      <PageSection>
        <PaddedInner>
          <Background gradient='sky' />
          <Hero />
        </PaddedInner>
      </PageSection>

      {/* about */}
      <PageSection>
        <About />
      </PageSection>

      {/* help header */}
      <PageSection bigMargin>
        <Heading>How <b>BooKee</b> helps you?</Heading>
      </PageSection>

      {/* step1 */}
      <PageSection bigMargin>
        <PaddedInner>
          <Step1 />
        </PaddedInner>
      </PageSection>

      {/* step2 */}
      <PageSection bigMargin>
        <PaddedInner>
          <Step2 />
        </PaddedInner>
      </PageSection>

      {/* benefit header */}
      <PageSection bigMargin>
        <Heading>Who can benefit from <b>BooKee</b>?</Heading>
      </PageSection>

      {/* potential users */}
      <PageSection bigMargin>
        <PaddedInner>
          <PotentialUsers />
        </PaddedInner>
      </PageSection>

      {/* try now*/}
      <PageSection bigMargin>
        <Heading>Sounds like you? Try <b>BooKee</b> Now!</Heading>
        <TryNow />
      </PageSection>
    </>
  )
}

const Background = styled.div<{gradient: string}>`
  z-index: -100;
  background: ${p => p.theme.gradients[p.gradient]};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 32px;
`

const Heading = styled(Heading2)`
  text-align: center;
  font-weight: lighter;
  font-size: 1.5rem;
`