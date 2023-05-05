import { Container, Header, Content } from "./styles"
import Skeleton from "../Skeleton"
import { CardProps } from "./types"
import { SkeletonProps } from "../Skeleton"

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

/* Card.Content */
interface ContentProps {
  dataLoaded?: boolean;
  skeletonProps?: SkeletonProps;
  children: React.ReactNode;
}
Card.Content = ({
  dataLoaded,
  skeletonProps,
  children
}: ContentProps) => {
  if (dataLoaded === false) {
    return <Skeleton {...skeletonProps} />;
  }
  return <Content>{children}</Content>;
};

export default Card;