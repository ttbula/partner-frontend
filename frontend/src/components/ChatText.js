import { useState } from 'react'
import axios from 'axios'

const ChatText = ({user, clickedUser, getUsersMessages, getClickedUsersMessages}) => {
    const [textArea, setTextArea] = useState(null)
    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
            await axios.post('http://localhost:4000/message', {message})
            getClickedUsersMessages()
            getUsersMessages()
            setTextArea("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='chatText'>
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <br/>
            <button className='submit-button' onClick={addMessage}>Send</button>

        </div>
    )
}

export default ChatText