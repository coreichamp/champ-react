import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    console.log('submit', e)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        Username: <Input type="text" value={username} onChange={setUsername} />
        {username === '' ? (<span style={{ color: 'red', margin: '10px' }}>requie username</span>) : null}
      </p>
      <p>
        Password: <Input type="text" value={password} onChange={setPassword} />
        {password === '' ? (<span style={{ color: 'red', margin: '10px' }}>requie password</span>) : null}
      </p>
      <Button onClick={handleSubmit}>Login</Button>
    </form>
  )
}

export default LoginForm
