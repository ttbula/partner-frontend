import ChatTop from "./ChatTop"
import ChatBody from "./ChatBody"
import MatchBody from "./MatchBody"
import {useState} from 'react'

const ChatContainer = ({user}) => {
    return (
        <div className="chatContainer">
            <ChatTop user={user}/>

            <div>
                <button className="buttonChat">Matches</button>
                <button className="buttonChat">Chat</button>
            </div>

            <MatchBody />

            <ChatBody />

        </div>
    )
}

export default ChatContainer