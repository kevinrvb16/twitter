import styled from "styled-components"

const Input = styled.input`
    outline: none;
    background: none;
    color: #fff;
    border: 1px solid rgba(167, 185, 198, 0.3);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px 12px;
    font-size: 16px;

    &::placeholder{
        color: #a7b9c673;
    }

    &:focus {
        border: 1px solid ${(props) => props.theme.color.blue};
    }
`

export default Input