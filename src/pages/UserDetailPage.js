import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserDetailPage = (props) => {
  console.log(props)
  const { userId } = props.match.params

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log('getting user.')
    const getUser = async () => {
      setLoading(true)
      const res = await fetch(`http://localhost:8000/users/${userId}`)
      const data = await res.json()
      console.log(data)
      setUser(data)
      setLoading(false)
    }
    getUser()
  }, [])
  if (loading) {
    return (
      <h3>Loading</h3>
    )
  }

  return (
    <>
      <h3>User Detail Page</h3>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>email: {user.email}</p>
      <p>Active: {user.id ? 'YES' : 'NO'}</p>
      <Link to="/users">Back</Link>
    </>
  )
}

export default UserDetailPage
