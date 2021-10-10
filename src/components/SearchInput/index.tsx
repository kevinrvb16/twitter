import { Input, InputContainer } from "./styles"
import {FiSearch} from "react-icons/fi"
const SearchInput = ()=> {
    return (
        <InputContainer>
            <FiSearch color="8899A6" size="17px"/>
            <Input placeholder="Buscar no Twitter"/>
        </InputContainer>
    )
}

export default SearchInput