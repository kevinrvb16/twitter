import styled from "styled-components"

interface IProps {
    isSelected?: boolean;
}
export const Container = styled.div`
    display: flex;
    margin-top: 27px;
    flex-direction: column;

    a {
        width: max-content;
    }
`
export const Button = styled.button<IProps>`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 11px;
    margin-top: 20px;
    align-items:center;
    background-color: ${props => props.isSelected ?  props.theme.color.blue + '40' : 'none'};
    border-radius:53px;
    width: max-content;
`


export const Title = styled.h1`
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    margin-left: 30px;
`
export const IconContainer = styled.div`
    padding-left: 11px;
`