import Nav from "../components/Nav"
import { useState } from 'react'
import AuthState from "../components/AuthState"

const Home = () => {
    const [showState, setShowState] = useState(false)

    const [signedUp, setSignedUp] = useState(true)

    const authToken = false

    const handleClick = () => {
        console.log('it works!')
        setShowState(true)
        setSignedUp(true)
    }

    return (
        <div className="page">
            <Nav setShowState={setShowState} showState={showState} setSignedUp={setSignedUp}/>
                <div className="home">
                    <h1 className="name">Partner-Up</h1>
                    <button className="button" onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>

                    {showState && (
                        <AuthState setShowState={setShowState} signedUp={signedUp}/>
                    )}
                </div>
        </div>
    )
}

export default Home