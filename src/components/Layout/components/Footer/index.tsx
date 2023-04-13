import styled from "styled-components"
import Link from "next/link";

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Links>
        <LinkItem href='/learn/choosing-banking-products'>How to save money</LinkItem>
        <LinkItem href='/paying-bills'>Paying credit bills</LinkItem>
        <LinkItem href='/privacy-policy'>Privacy Policy</LinkItem>
      </Links>

      {/* copyright field */}
    </FooterWrapper>
  </FooterContainer>
)

export default Footer;


const FooterContainer = styled.div`
  background-color: ${p => p.theme.colors.sky_blue};
  padding: 64px 16px;
`

const FooterWrapper = styled.div`
  width: 100%;
  max-width: ${p => p.theme.layout.max_width};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Links = styled.div`
  display: flex;
  gap: 16px;
`

const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.text_grey_dark};

  ${p => p.theme.mediaQueries.sm} {
    font-size: 0.9rem;
  }
`