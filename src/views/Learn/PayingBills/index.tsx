import { PageSection } from "@/components/Layout/Page"
import { Heading1, Heading3 } from "@/components/Heading"
import { Header, Date, Img, Content, P, Ul, Ol, Li } from "../styles"
import deadlineImg from "@/assets/images/deadline.jpeg"

export default function PayingBills() {
  return (
    <PageSection>
      <Header>
        <Heading1>Why does BooKee suggest you to pay credit bills in advance?</Heading1>
        <Date>April 13, 2023 8:30pm</Date>
      </Header>
      <Content>
        <Img src={deadlineImg} alt='Paying credit bills early article image' />
        
        {/* misconception */}
        <Heading3 style={{margin: '32px 0'}}>Misconception</Heading3>
        <P>
          One misconception my friends had, about paying credit bills in advance, was that many of them thought paying in advance means paying higher amount every month.
          I will explain why that is not true with an example.
        </P>

        <P>
          Let's assume the following:
        </P>

        <Ol>
          <Li>You have a credit card from CIBC</Li>
          <Li>
            On Mar 20, 2023, you receive your credit card statement with the following detail:
            <Ul>
              <Li>Balance: $1,000</Li>
              <Li>Statement period: Feb 21, 2023 - Mar 20, 2023</Li>
              <Li>Payment deadline: Apr 10, 2023 (you usually get a grace period of 21 days; therefore, the deadline is set to 21 days after the bill issued date)</Li>
            </Ul>
          </Li>
        </Ol>

        <P>
          In summary, what your credit statement is saying is that you have to make a payment of $1,000 by Apr 10,
          and that payment is for the purchase you had made from Feb 21 to Mar 20 (<b>1 month period</b>).
        </P>

        <P>
          Paying in advance does NOT mean paying for the purchase you had made for a longer period of time. You still pay for the same <b>1 month period</b>.
          All you are doing is shifting the statement period, and making a payment on the last day of each month.
        </P>

        {/* why */}
        <Heading3 style={{margin: '32px 0'}}>So, what's the benefit of it?</Heading3>

        <P>
          By the way, did you notice anything weird on the above example? "Your credit statement issued on Mar 20 says,
          you have to make a payment of $1,000 by Apr 10, and that payment is for the purchase you had made from Feb 21 to Mar 20."
        </P>

        <P>
          What do you think an average young adult would do when they receive that credit card statement? 7/10 of my friends will make payments between Apr 3-10.
          That makes managing their spendings overly complicated. Come on! Do you really want to pay for the stuff (you purchased on Feb 21) on Apr 7?
          And imagine you have multiple credit cards with different statement periods and deadlines. Yuck! 🤮 Let's not do that.
        </P>

        <P>
          In summary, changing your statement period and paying credit bills on the last day of each month allow you to easily manage your spendings
          by making a payment for the purchase you've made in the <b>same month</b> the purchase was made.
          It also helps maintaining a good credit score by reducing the chance of paying late (my credit score is 830+ 😉)
        </P>

        <P>
          On the other hand, this approach is highly opinionated, and some might argue that it has downsides as well as paying your credit bills in advance
          defeats the purpose of having credit. But, I am not saying this is what everyone should do. The whole purpose of BooKee is to share
          my opinion and approach with my friends who are willing to adopt it, and to help many young adults out there who don't know where to start.
        </P>

        <P>
          If you feel like this is misleading, please don't hesitate to raise your concern and contact me. I am always open to criticism, learn from it, and fix mistakes I've made.
        </P>

        <P style={{color: 'green'}}>// add mini contact form here later or maybe my email</P>

      </Content>
    </PageSection>
  )
}