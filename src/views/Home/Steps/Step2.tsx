import React from "react"
import Link from "next/link"
import Jumbotron from "@/components/Jumbotron"
import { Note, StepButton } from "./styles"
import payImg from "@/assets/images/pay.png"

const Step2: React.FC = () => (
  <Jumbotron direction='row-reverse'>
    <Jumbotron.Pane>
      <Jumbotron.SubHeading colorTheme='success'>Second</Jumbotron.SubHeading>
      <Jumbotron.Heading>Pay your credit bills in advance</Jumbotron.Heading>
      <Jumbotron.Content>
        <p>
          This is the core feature of BooKee. It suggests you to change statement period, and pay credit bills on the last day of each month.
          This way, your payment <b>matches</b> your spendings every month.
        </p>
        <Note>Learn about misconceptions and benefits of paying credit bills in advance</Note>
        <Link href='/article/paying-bills'>
          <StepButton bgTheme='secondary' width={140}>Learn more</StepButton>
        </Link>
      </Jumbotron.Content>
    </Jumbotron.Pane>
    <Jumbotron.Pane align='left'>
      <Jumbotron.Image
        src={payImg}
        alt='Step 1 image'
      />
    </Jumbotron.Pane>
  </Jumbotron>
)

export default Step2;