import Nav from "../components/Nav"

const Home = () => {

    const authToken = false

    const handleClick = () => {
        console.log('it works!')
    }

    return (
        <div className="page">
            <Nav authToken={authToken} />
                <div className="home">
                    <h1>Partner-Up</h1>
                    <button className="button" onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>
                </div>
        </div>
    )
}

export default Home