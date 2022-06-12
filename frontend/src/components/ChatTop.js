import { useCookies } from 'react-cookie'


const ChatTop = ({user}) => {

    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])

    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        window.location.reload()
    }

    return (
        <div className='chatTop'>
            <div className='profilePic'>
                <div className='image'>
                    <img src={user.url} />
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <i className="logOut" onClick={logout}> X </i>
        </div>
    )
}


export default ChatTop