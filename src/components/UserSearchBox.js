import React, { useContext } from 'react'
import Input from './Input'
import UserDataContext from '../contexts/UserDataContext'

const UserSearchBox = () => {
  const { search, setSearch } = useContext(UserDataContext)
  console.log(search)

  return (
    <Input type="text" value={search} onChange={setSearch} />
  )
}

export default UserSearchBox
