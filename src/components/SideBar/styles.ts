import styled from "styled-components"

interface IProps {
    isSelected?: boolean;
}
export const Button = styled.button<IProps>`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 11px;
    margin-top: 20px;
    align-items:center;
    background-color: ${props => props.isSelected ?  props.theme.color.blue + '30' : 'none'};
    border-radius:53px;

`


export const Title = styled.h1`
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    margin-left: 30px;
`
