import { DropDown, Input, InputContainer, UserContainer, UserNames } from "./styles"
import { FiSearch } from "react-icons/fi"
import { useEffect, useState } from "react"
import { apiWithAuth } from "../../services/api"
import { Link } from "react-router-dom"
const SearchInput = () => {

    interface IUsers {
        name: string;
        username: string;
    }

    const [isOnFocus, setIsOnFocus] = useState(false)
    const [users, setUsers] = useState<IUsers[]>()
    const [search, setSearch] = useState('')
    const searchUsers = async () => {
        const { data } = await apiWithAuth.get(`/users?search=${search}`)

        setUsers(data)
    }

    useEffect(() => {
        const timeout = setTimeout(searchUsers, 800)

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    return (
        <InputContainer isOnFocus={isOnFocus}>
            <FiSearch size="17px" />
            <Input
                id="search-users-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar no Twitter"
                onFocus={() => setIsOnFocus(true)}
            />
            {users && isOnFocus && (
                <DropDown
                    onMouseLeave={() => {
                        setIsOnFocus(false)
                        document.getElementById('search-users-input')?.blur()
                    }}
                >
                    {users?.map((user, index) => (
                        <Link key={index} to={`/perfil/${user.username}`}>
                            <UserContainer>
                                <img src={`https://robohash.org/${user.username}`} alt={user.name} />
                                <UserNames>
                                    <h1>{user.name}</h1>
                                    <h2>@{user.username}</h2>
                                </UserNames>
                            </UserContainer>
                        </Link>
                    ))
                    }
                </DropDown >
            )}
        </InputContainer >
    )
}

export default SearchInput