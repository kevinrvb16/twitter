import { Input, InputContainer } from "./styles"
import {FiSearch} from "react-icons/fi"
import { useState } from "react"
const SearchInput = ()=> {

    const [isOnFocus, setIsOnFocus] = useState(false)
    return (
        <InputContainer isOnFocus={isOnFocus}>
            <FiSearch size="17px"/>
            <Input placeholder="Buscar no Twitter"
            onFocus={ () => setIsOnFocus(true)}
            onBlur={ () => setIsOnFocus(false)}/>
        </InputContainer>
    )
}

export default SearchInput