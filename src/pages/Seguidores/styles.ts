import styled from 'styled-components'

interface IProps {
    isActive: boolean
}
export const FixedContentContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 21px;
`

export const FixedContentTexts = styled.div`
    margin-left: 23px;

    h1{
        font-weight: 700;
        font-size: 19px;
        line-height: 23px;
        color: #d9d9d9;
    }
`

export const FollowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const FollowTitle = styled.h1<IProps>`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    padding-top: 23px;
    padding-bottom: 23px;
    border-bottom: 4px solid ${props => props.isActive ? props.theme.color.blue : 'transparent'};
    color: ${ props =>props.isActive ? '#d9d9d9' : '#6d777c'};
    cursor: pointer;
`

export const UserContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    img{
        border-radius: 50%;
        height: 49px;
        width: 49px;
        margin-right: 10px;
    }
`

export const UserText = styled.div`
    font-size: 15px;
    line-height: 18px;

    h1{
        font-weight: 700;
    }
    h2 {
        color: ${props => props.theme.color.gray}
    }
    p {
        margin-top: 8px;
    }
`