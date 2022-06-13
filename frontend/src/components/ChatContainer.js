import ChatTop from "./ChatTop"
import ChatBody from "./ChatBody"
import MatchBody from "./MatchBody"
import {useState} from 'react'

const ChatContainer = ({user}) => {

    const [ clickedUser, setClickedUser ] = useState(null)
    
    return (
        <div className="chatContainer">
            <ChatTop user={user}/>

            <div>
                <button className="buttonChat" onClick={() => setClickedUser(null)}>Matches</button>
                <button className="buttonChat" disabled={!clickedUser}>Chat</button>
            </div>

            {!clickedUser && <MatchBody matches={user.matches} setClickedUser={setClickedUser}/>}

            {clickedUser && <ChatBody user={user} clickedUser={clickedUser}/>}

        </div>
    )
}

export default ChatContainer