import ChatTop from "./ChatTop"
import ChatBody from "./ChatBody"
import MatchBody from "./MatchBody"


const ChatContainer = () => {
    return (
        <div className="chatContainer">
            <ChatTop />

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