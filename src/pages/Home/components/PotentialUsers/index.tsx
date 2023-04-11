import React from "react"
import styled from "styled-components";

const PotentialUsers: React.FC = () => (
  <List>
    <ListItem>You just started earning money, and don't have enough fund or plan for investment yet.</ListItem>
    <ListItem>You find personal finance overly complicated and don't know where to start.</ListItem>
    <ListItem>You want to stop procrastinating. You are willing to do monthly bookkeeping and frequently record transactions.</ListItem>
  </List>
)

export default PotentialUsers;

const List = styled.ol`
  margin: 16px;
`

const ListItem = styled.li`
  margin-bottom: 32px;
  font-size: 1rem;
  color: ${p => p.theme.colors.text_grey};

  ${p => p.theme.mediaQueries.sm} {
    margin-bottom: 64px;
    font-size: 1.1rem;
  }
`