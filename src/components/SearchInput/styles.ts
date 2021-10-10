import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 348px;
    background: #202327;
    border: 1px solid #253341;
    box-sizing: border-box;
    border-radius: 40px;
    padding: 12px;
    display: flex;
    align-items: center;
`
export const Input = styled.input`
    margin-left: 12px;
    outline: none;
    border: none;
    background-color: #202327;
    color: #FFF;
    font-size: 15px;
    line-height: 18px;
    &::placeholder{
        color: ${props => props.theme.color.gray};
    }
`