import { useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const AuthState = ({setShowState, signedUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    let navigate = useNavigate()

    console.log(email, password, confirm)

    const handleClick = () => {
        setShowState(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(signedUp && (password !== confirm)) {
                setError('Passwords do not match')
                return
            } 

            const response = await axios.post(`http://localhost:4000/${signedUp ? 'signup' : 'login'}`, {email, password})

            setCookie('UserId', response.data.userId)
            setCookie('AuthToken', response.data.token)
            
            const success = response.status === 201

            // setCookie('Email', response.data.email)

            if (success && signedUp) navigate ('/user')
            if (success && !signedUp) navigate ('/dashboard')


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