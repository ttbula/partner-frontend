import Nav from "../components/Nav"
import { useState } from 'react'
import AuthState from "../components/AuthState"

const Home = () => {
    const [showState, setShowState] = useState(false)

    const authToken = false

    const handleClick = () => {
        console.log('it works!')
        setShowState(true)
    }

    return (
        <div className="page">
            <Nav authToken={authToken} setShowState={setShowState} showState={showState}/>
                <div className="home">
                    <h1>Partner-Up</h1>
                    <button className="button" onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>

                    {showState && (
                        <AuthState setShowState={setShowState}/>
                    )}
                </div>
        </div>
    )
}

export default Home