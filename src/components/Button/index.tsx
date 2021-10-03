import { StyledButton } from "./styles"

export interface IProps {
    width?: string
    height?: string
}

const Button: React.FC<IProps> = ({ children, width, height}) => {
    return (
        <StyledButton width={width} height={height}>{ children }</StyledButton>
    )
}

export default Button