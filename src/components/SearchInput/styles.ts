import styled from 'styled-components'
 interface IProps {
     isOnFocus: boolean;
 }
export const InputContainer = styled.div<IProps>`
    width: 348px;
    background: #202327;
    border: 1px solid ${props => props.isOnFocus ? props.theme.color.blue : '#253341'};
    box-sizing: border-box;
    border-radius: 40px;
    padding: 12px;
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    margin-top: 12px;
    svg {
        stroke: ${props => props.isOnFocus ? props.theme.color.blue : '#8899A6'}
    }
`
export const Input = styled.input`
    margin-left: 12px;
    outline: none;
    border: none;
    background-color: #202327;
    color: #FFF;
    font-size: 15px;
    line-height: 18px;
    width: 100%;
    &::placeholder{
        color: ${props => props.theme.color.gray};
    }
`

export const DropDown = styled.div`
    position: absolute;
    background-color:#000;
    left: 0;
    top: 54px;
    width: 308px;
    border: 1px solid #2f3336;
    border-radius: 8px;
    padding: 20px;
    max-height: 575px;
    overflow: auto;

    &::-webkit-scrollbar {
    width: 10px;
  }

    &::-webkit-scrollbar-track {
        background: #ffffff50;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #202327;
        border-radius: 10px;
    }
`
export const UserNames = styled.div`
    margin-left: 10px;
    font-size:15px;
    line-height: 18px;

    h2{
        color: ${props => props.theme.color.gray}
    }
    h1{
        font-weight: 700;
    }
`
export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        border-radius: 50%;
        width: 49px;
        height: 49px;
    }

    &:not(:last-child) {
        margin-bottom: 14px;
    }

`