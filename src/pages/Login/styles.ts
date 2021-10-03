import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    `

export const BackgroundContainer = styled.div`
img { 
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`
export const RightContainer = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    h1 {
        margin-top: 60px;
        margin-bottom: 32px;
        font-weight: 700;
        font-size: 64px;
        font-style: normal;
        line-height: 83px;
        color: #D9D9D9;
    }

    h2 {
        font-size: 31px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        color: #D9D9D9;
        margin-bottom: 32px;
    }

    p {
        font-size: 16px;
        font-style: normal;
        line-height: 19px;
        margin-top: 26px;
    }
    span {
        color: ${ (props) => props.theme.color.blue};
        cursor: pointer;
    }
`

export const Button = styled.button`
    background-color: #fff;
    color: #000;
    border-radius: 70px;
    height: 49px;
    width: 381px;
    border-radius: 70px;
    padding: 14px, 92px, 14px, 92px;
    border: 0;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`