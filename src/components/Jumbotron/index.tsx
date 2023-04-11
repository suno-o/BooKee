import React from "react"
import {
  Container,
  Pane,
  Heading,
  SubHeading,
  Content,
  Image
} from "./styles"

interface Props {
  direction?: string;
  children: React.ReactNode;
}

const Jumbotron = ({direction='row', children}: Props) => (
  <Container direction={direction}>
    {children}
  </Container>
);

Jumbotron.Pane = Pane;
Jumbotron.Heading = Heading;
Jumbotron.SubHeading = SubHeading;
Jumbotron.Content = Content;
Jumbotron.Image = Image;

export default Jumbotron;