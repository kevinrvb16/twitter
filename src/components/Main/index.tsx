import { Container, FixedContent, ScrollableContent } from "./styles"

interface IProps {
    fixedContent?: JSX.Element
}

const Main: React.FC<IProps> = ({ children, fixedContent }) => {
    return (
        <Container>
            <FixedContent>{fixedContent}</FixedContent>
            <ScrollableContent>{children}</ScrollableContent>
        </Container>
    )
}

export default Main