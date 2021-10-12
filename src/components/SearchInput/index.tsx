import { DropDown, Input, InputContainer, UserContainer, UserNames } from "./styles"
import { FiSearch } from "react-icons/fi"
import { useEffect, useState } from "react"
const SearchInput = () => {

    interface IUsers {
        name: string;
        username: string;
    }

    const mockUsers = [
        { name: 'daniel berg', username: 'daniel11' },
        { name: 'Bruno Braga', username: 'bruno11' },
        { name: 'Luã Alvaro', username: 'lulu' }
    ]
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [users, setUsers] = useState<IUsers[]>(mockUsers)
    const [search, setSearch] = useState('')

    useEffect( () => {
        const timeout = setTimeout(() => console.log('chama o backend!'), 800)

        return () => clearTimeout(timeout)
    }, [search])
    return (
        <InputContainer isOnFocus={isOnFocus}>
            <FiSearch size="17px" />
            <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar no Twitter"
                onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)} />
            {users && (
            <DropDown>
                {users?.map((user, index)=> (
                <UserContainer key={index}>
                    <img src={`https://robohash.org/${user.username}`} alt={user.name} /> 
                    <UserNames>
                        <h1>{user.name}</h1>
                        <h2>@{user.username}</h2>
                    </UserNames>
                </UserContainer>
    ))
}
            </DropDown >
            )}
        </InputContainer >
    )
}

export default SearchInput