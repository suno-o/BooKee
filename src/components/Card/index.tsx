import { Container, Header, Content } from "./styles"
import { CardProps } from "./types";

const Card = ({
  children,
  styles={},
  ...rest
}: CardProps) => (
  <Container styles={styles} {...rest}>
    {children}
  </Container>
)

/* Card.Header */
Card.Header = Header;
Card.Content = Content;

export default Card;