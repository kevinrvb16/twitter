import { DropDown, Input, InputContainer } from "./styles"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
const SearchInput = () => {

    interface IUsers {
        name: string;
        username: string;
    }

    const mockUsers = [
        { name: 'daniel', username: 'daniel' },
        { name: 'Bruno', username: 'bruno' }
    ]
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [users, setUsers] = useState<IUsers[]>(mockUsers)
    return (
        <InputContainer isOnFocus={isOnFocus}>
            <FiSearch size="17px" />
            <Input placeholder="Buscar no Twitter"
                onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)} />
            {users && (
            <DropDown>
                {users?.map((user, index)=> (
                <h1 key={index}> {user.name}</h1>
                ))}
            </DropDown>
            )}
        </InputContainer>
    )
}

export default SearchInput