import { useState } from 'react'

const AuthState = ({setShowState, signedUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirm)

    const handleClick = () => {
        setShowState(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if(signedUp && (password !== confirm)) {
                setError('Passwords do not match')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth-state">
            <div className="close" onClick={handleClick}>X</div>
            <h2>{signedUp ? 'Sign Up Here!' : 'Log In'}</h2>
            <form className="form" onSubmit={handleSubmit}>
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
                {signedUp && <input
                    type='password-check'
                    id='password-check'
                    name='password-check'
                    placeholder='Confirm your password'
                    required={true}
                    onChange={(e) => setConfirm(e.target.value)}
                />}
                <input className="submit-button" type="submit" />
                <p>{error}</p>
            </form>
        </div>
    )
}

export default AuthState