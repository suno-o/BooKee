import { PageSection } from "@/components/Layout/Page"
import { Heading1, Heading3 } from "@/components/Heading"
import { Header, Date, Img, Content, P, Ul, Ol, Li } from "../styles"
import savingImg from "@/assets/images/casestudy.jpg"

export default function ChoosingBankingProducts() {
  return (
    <PageSection>
      <Header>
        <Heading1>Choosing Your Banking Products</Heading1>
        <Date>April 12, 2023 10:30pm</Date>
      </Header>
      <Content>
        <Img src={savingImg} alt='Choosing banking products article image' />
        
        {/* motivation */}
        <Heading3 style={{margin: '32px 0'}}>Motivation</Heading3>
        <P>
          One thing I noticed, as everyone around me started to earn money, is that the conversation we were
          having started to change. We talked less about our daily life, or games we play.
          Instead, we started talking more about our future. Our career goals. Financial goals. And of course, our plans for marriage.
        </P>
        <P>
          One of the hottest topic was always this. <b>&quot;What do you do with your money&quot;</b>. We all had our own sort of baby approach, but a lot of my friends were 
          specifically impressed with mine, and started to adopt it. This was my motivation to start working on this project.
        </P>
        <P>
          In this article, I would like to share how I save and benefit $1500+ annually just by choosing the right banking product.
        </P>

        {/* begin */}
        <Heading3 style={{margin: '32px 0'}}>Let&apos;s begin</Heading3>
        <P>I am an adult who lives in a small apartment in Downtown Toronto. My primary spendings are:</P>
        <Ol>
          <Li>Rent</Li>
          <Li>Food - grocery, restaurant (dine-in, take-out, delivery)</Li>
          <Li>Bills - insurance, utilities, subscriptions (Netflix, Amazon, etc..)</Li>
        </Ol>
        <P>Based on this, I opened 1 savings and 2 chequings accounts, and 2 credit cards.</P>
        <Ol>
          <Li>
            EQ bank savings account
            <Ul>
              <Li>This acts as a control centre between all of my accounts. This is where I get my payroll and manage money transfers between all of my accounts (they offer free transfers up to $30k/week)</Li>
              <Li>They also give a pretty good interest rate with no commitment</Li>
            </Ul>
          </Li>
          <Li>
            Simplii Financial chequing account
            <Ul>
              <Li>Free unlimited e-transfers</Li>
              <Li>Free cheques (it is a small benefit as I pay rent with cheques)</Li>
            </Ul>
          </Li>
          <Li>
            Simplii Financial Credit Card
            <Ul>
              <Li>4% cashback on restaurants and deliveries (UberEATS, etc..)</Li>
            </Ul>
          </Li>
          <Li>
            Scotia One Package
            <Ul>
              <Li>Since 2 banks above only offer online banking, I opened this for urgent situation when I need to visit branch and talk to a real person. Also it&apos;s good to have at least one account from big 5 banks</Li>
              <Li>Deposit some cash as an emergency fund and get credit card fee waived</Li>
            </Ul>
          </Li>
          <Li>
            ScotiaBank Momentum Credit Card
            <Ul>
              <Li>4% cashback on grocery, bill payments and subscriptions</Li>
              <Li>Mobile phone insurance (covers accidental damage as well as theft)</Li>
            </Ul>
          </Li>
        </Ol>

        {/* calculation */}
        <Heading3 style={{margin: '32px 0'}}>Calculation</Heading3>
        <P>Average savings from cashback:</P>
        <Ol>
          <Li>
            Food
            <Ul>
              <Li>Spending: $800/month = $9,600 annually</Li>
              <Li>Total savings: $9,600 * 0.04 (4% cashback) = $384/year</Li>
            </Ul>
          </Li>
          <Li>
            Bills
            <Ul>
              <Li>Spending: $270 (insurance) + $65 (hydro) + $67 (internet) + $50 (phone) + $30 (etc) / month = $482/month = $5,784 annually</Li>
              <Li>Total savings: $5,784 * 0.04 (4% cashback) = $231/year</Li>
            </Ul>
          </Li>
          <Li>
            Gas and transportation
            <Ul>
              <Li>Spending: $60/month = $720 annually</Li>
              <Li>Total savings: $720 * 0.03 (3% cashback) = $21.6/year</Li>
            </Ul>
          </Li>
          <Li>
            Miscellaneous (car maintenance, furniture, whatever you can think of)
            <Ul>
              <Li>Spending: Roughly $15,000 / year</Li>
              <Li>Total savings: $15,000 * 0.01 (1% cashback) = 150/year</Li>
            </Ul>
          </Li>
        </Ol>
        <P>Interest from emergency fund</P>
        <Ol>
          <Li>
            I have $10,000 in my Savings account as an emergency fund and it used to offer 3% interest rate
            <Ul>
              <Li>Interest: 10000 (1+0.03/12)^12 - 10000 = $304/year</Li>
            </Ul>
          </Li>
        </Ol>

        {/* summary */}
        <Heading3 style={{margin: '32px 0'}}>Summary</Heading3>
        <P>
          Based on the above calculation, the total amount I save is around $1,091/year. If I consider some of the spending
          I did not disclose here, and value of benefits I receive, the total becomes around $1,500+/year. Some might say this isn&apos;t much. But
          something is better than nothing :) And all I have done is <b>choosing the right banking products based on my spending habit.</b>
        </P>

      </Content>
    </PageSection>
  )
}