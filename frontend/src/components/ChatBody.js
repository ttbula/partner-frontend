import axios from "axios"
import Chat from "./Chat"
import ChatText from "./ChatText"
import { useState, useEffect } from "react"

const ChatBody = (user, clickedUser) => {

    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id
    const [usersMessages, setUsersMessages] = useState(null)
    const [clickedUsersMessages, setClickedUsersMessages] = useState(null)

    const getUsersMessages = async () => {
        try {
            const response = await axios.get('https://partner-up-backend.herokuapp.com/messages', {
                params: {userId: userId, correspondingUserId: clickedUserId}
            })
            setUsersMessages(response.data)
        
        } catch (error) {
            console.log(error)
        }
    }
    const getClickedUsersMessages = async () => {
        try {
            const response = await axios.get('https://partner-up-backend.herokuapp.com/messages', {
                params: {userId: clickedUserId, correspondingUserId: userId}
            })
            setClickedUsersMessages(response.data)
        
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsersMessages()
        getClickedUsersMessages()
    }, [])

    const messages = []

    usersMessages?.forEach(message => {
        const formattedMessage = {}
        formattedMessage['name'] = user?.first_name
        formattedMessage['img'] = user?.url
        formattedMessage['message'] = message.message
        formattedMessage['timestamp'] = message.timestamp
        messages.push(formattedMessage)


    })
    clickedUsersMessages?.forEach(message => {
        const formattedMessage = {}
        formattedMessage['name'] = clickedUser?.first_name
        formattedMessage['img'] = clickedUser?.url
        formattedMessage['message'] = message.message
        formattedMessage['timestamp'] = message.timestamp
        messages.push(formattedMessage)


    })

    const descendingOrderMessages = messages?.sort((a, b) => a.timestamp.localeCompare(b.timestamp))

    return (
        <div>
            <Chat descendingOrderMessages={descendingOrderMessages}/>
            <ChatText
            user={user}
            clickedUser={clickedUser} 
            getUsersMessages={getUsersMessages} 
            getClickedUsersMessages={getClickedUsersMessages}
            />
        </div>
    )
}

export default ChatBody