import React from "react"
import Link from "next/link"
import Jumbotron from "@/components/Jumbotron"
import { Note, StepButton } from "./styles"
import chooseImg from "@/assets/images/choose.png"

const Step1: React.FC = () => (
  <Jumbotron>
    <Jumbotron.Pane>
      <Jumbotron.SubHeading colorTheme='success'>First</Jumbotron.SubHeading>
      <Jumbotron.Heading>Choose the right product</Jumbotron.Heading>
      <Jumbotron.Content>
        <p>
          Understanding your spending habit, and choosing the right banking product is the first step.
          BooKee helps you categorize your spendings, so you can better analyze them.
        </p>
        <Note>Learn how I save and benefit $1500+ annually just by choosing the right product</Note>
        <Link href='/learn/choosing-banking-products'>
          <StepButton width={140}>Read more</StepButton>
        </Link>
      </Jumbotron.Content>
    </Jumbotron.Pane>
    <Jumbotron.Pane align='right'>
      <Jumbotron.Image
        src={chooseImg}
        alt='Step 1 image'
      />
    </Jumbotron.Pane>
  </Jumbotron>
)

export default Step1;