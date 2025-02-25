
//cards that make up the messages page list
function MessageCard({ message }) {
  return (
    <>
    <div className="messageCard">
      <p>{message.from}: {message.text}</p>
    </div>

    </>
  )
}

export default MessageCard
