import React from "react"
import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/Button"

const TryNow: React.FC = () => (
  <ButtonWrapper>
    <Link href="/register">
      <TryButton>Create account</TryButton>
    </Link>
  </ButtonWrapper>
)

export default TryNow;

const ButtonWrapper = styled.div`
  margin-top: 32px;
  text-align: center;
`

const TryButton = styled(Button)`
  width: 240px;
  border-radius: 16px;
  padding: 16px;
  font-size: 1rem;
`