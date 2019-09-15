import React, { useEffect, useState } from 'react'
import UsersTable from '../components/UsersTable'
import UserDataContext from '../contexts/UserDataContext'
import UserSearchBox from '../components/UserSearchBox'

const UserPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log('fetch data.')
    const fetchUsers = async () => {
      setLoading(true)

      const res = await fetch('http://localhost:8000/users')
      const data = await res.json()

      console.log(data)
      setUsers(data)
      setLoading(false)
    }
    fetchUsers()
  }, [])
  if (loading) {
    return (
      <h3>Loading</h3>
    )
  }
  return (
    <UserDataContext.Provider value={{
      users, loading, search, setSearch,
    }}
    >
      <UserSearchBox />
      <UsersTable users={users} />
    </UserDataContext.Provider>

  )
}
export default UserPage
