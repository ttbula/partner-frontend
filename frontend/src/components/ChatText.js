import { useState } from 'react'

const ChatText = () => {
    const [textArea, setTextArea] = useState(null)
    return (
        <div className='chatText'>
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <br/>
            <button className='submit-button'>Send</button>

        </div>
    )
}

export default ChatText