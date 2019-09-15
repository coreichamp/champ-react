import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserDataContext from '../contexts/UserDataContext'

const UsersTable = () => {
  const { users, search } = useContext(UserDataContext)
  return (
    <>

      <div style={{ margin: 10 }}> <h3>TABLE</h3>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {
                users.filter(user => user.role === search || search === '').map(user => (
                  <tr key={user.id}>
                    <td> <Link to={`/users/${user.id}`}>{user.id}</Link></td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.active ? (<p style={{ color: 'green' }}>YES</p>) : (<p style={{ color: 'red' }}>NO</p>)}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default UsersTable
