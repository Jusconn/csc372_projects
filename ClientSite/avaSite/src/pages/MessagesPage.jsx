import { useState,useEffect, use } from 'react'
import MessageCard from '../components/MessageCard'
import Navbar from '../components/Navbar'
import MessagesForm from '../components/MessagesForm'
import { getRequest } from '../js/requests'

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

function parseXMLMessages(xml) {
  let messageElements = xml.getElementsByTagName("message");
  let parsedMessages = [];
  for (let i = 0; i < messageElements.length; i++) {
    let message = messageElements[i];
    let from = message.getElementsByTagName("from")[0].textContent;
    let text = message.getElementsByTagName("text")[0].textContent;
    parsedMessages.push({ id: i, from: from, text: text });
  }
  return parsedMessages;
}

function MessagesPage() {
  const [messages, setMessages] = useState([]);
    // fetches the messages from the messages.xml file
    useEffect(() => {
      async function fetchMessages() {
        let messages = await getRequest("src/data/messages.xml","xml");
        messages = parseXMLMessages(messages);
        setMessages(messages);
      }
      fetchMessages();
    }, []);

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
