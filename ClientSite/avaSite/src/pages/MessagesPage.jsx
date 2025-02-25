import MessageCard from '../components/MessageCard'
import Navbar from '../components/Navbar'
import MessagesForm from '../components/messagesForm';

const messages = [
    {
      id: 1,
      from: "Bart",
      text: "Saw your work at the fatelli gallery last weekend. Great stuff!",
    },
    {
      id: 2,
      from: "Lisa",
      text: "Loved your work with Dogtree Band!",
    },
    {
      id: 3,
      from: "Bart",
      text: "Just found your website. It's awesome! You really know your stuff when it comes to video work.",
    },
    {
      id: 4,
      from: "Jess",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

function MessagesPage() {

  return (
    <>
    <Navbar/>
    <div className="main-content">
        <h1>Messages</h1>
        <div className="messages">
            {messages.map((message) => (
            <MessageCard key={message.id} message={message} />
            ))}
        </div>
        <h2>Send Me a Message!</h2>
        <MessagesForm />
    </div>
    </>
  )
}

export default MessagesPage
