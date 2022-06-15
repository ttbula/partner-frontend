const Chat = ({descendingOrderMessages}) => {
    return (
        <>
            <div className="appearance">
            {descendingOrderMessages.map((message, idx) => (
                <div key ={idx}>
                    <div className="chat-message-header">
                            <div className="img-container">
                                <img src={message.img} alt={message.first_name + ' profile'}/>

                            </div>
                            <p>{message.name}</p>
                    </div>
                    <p>{message.message}</p>
                </div>
            ))}
            </div>
        </>
    )
}

export default Chat