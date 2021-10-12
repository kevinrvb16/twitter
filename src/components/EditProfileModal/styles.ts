import styled from "styled-components";

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ModalHeaderTtitle = styled.h1`
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    color: #d9d9d9;
    margin-left: 30px;
`

export const ModalHeaderClose = styled.div`
    display: flex;
    align-items: center;

    svg {
        cursor: pointer;
    }
`

export const ModalBody = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input:not(:last-child) {
        margin-bottom: 25px;
    }
`