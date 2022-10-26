import React from 'react'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className="login">
        <form className="login_form">
            <h1>Login Here</h1>
            <input 
                type="name" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
        </form>
    </div>
  )
}

export default Login