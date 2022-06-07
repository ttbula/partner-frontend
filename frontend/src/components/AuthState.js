import { useState } from 'react'

const AuthState = ({setShowState}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = () => {
        setShowState(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const hasAccount = true

    return (
        <div className="auth-state">
            <div className="close" onClick={handleClick}>X</div>
            <h2>{hasAccount ? 'Make Account' : 'Log In'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='password'
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type='password-check'
                    id='password-check'
                    name='password-check'
                    placeholder='Confirm your password'
                    required={true}
                    onChange={(e) => setConfirm(e.target.value)}
                />
            </form>
        </div>
    )
}

export default AuthState