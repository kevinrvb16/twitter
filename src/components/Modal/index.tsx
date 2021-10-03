import React from "react";
import { BackGround, Center } from "./styles";

interface IProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<IProps> = ({ children, isOpen, setIsOpen }) => {
    const onClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            setIsOpen(false)}
        }
    
    return (
        <>
            {isOpen &&(
                <BackGround onClick={ onClose }>
                    <Center>{children}</Center>
                </BackGround>
            )}
        </>
    )
}
export default Modal;