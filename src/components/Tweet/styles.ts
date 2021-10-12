import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 15px;
    padding-right: 15px;

    &:not(:last-child){
        border-bottom: 1px solid ${props => props.theme.color.borderColor};
    }

    img { 
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
`
export const TweetNames = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    h1 {
        font-weight: 700;
        font-size: 15px;
        line-height:18px;
    }
    h2 {
        margin-left: 5px;
        font-size: 12px;
        line-height: 14px;
        color: ${props => props.theme.color.gray}
    }
`

export const TweetText = styled.p`
    font-size: 12px;
    line-height: 14px;
`
