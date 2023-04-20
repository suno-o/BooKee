import styled from "styled-components"
import Link from "next/link"
import Button from "@/components/Button"

export default function Register() {
  return (
    <Container>
      <p style={{fontSize: '1rem', marginBottom: '16px'}}>Register service is not available yet.</p>
      <Link href='/dashboard'>
        <Button>Go to Dashboard</Button>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  margin: 120px auto;
  text-align: center;

  & p {
    font-size: 1rem;
  }
`