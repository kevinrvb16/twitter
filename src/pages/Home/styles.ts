import styled from "styled-components"

export const UserName = styled.h1`
    padding-top: 25px;
    padding-bottom: 25px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    border-bottom: 1px solid ${props => props.theme.color.borderColor};
    padding-left: 20px;
    padding-right: 20px;
`

export const TweetContainer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    img { 
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
`

export const TweetInput = styled.input`
    display: block;
    height: max-content;
    margin-left: 12px;
    outline: none;
    border: none;
    background-color: #000;
    color: #FFF;
    font-size: 19px;
    line-height: 23px;
    width: 100%;

    &::placeholder{
        color: ${props => props.theme.color.gray};
    }
`

export const TweetButton = styled.div`
    margin-top: 18px;
    margin-bottom: 10px;
    text-align: right;
    padding-right: 20px;
`