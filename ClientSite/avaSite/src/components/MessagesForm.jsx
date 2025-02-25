import React, { useState, useEffect } from 'react';
import $ from 'jquery';

//form for submitting messages
function MessagesForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        $("#submit").click(function(e) {
            e.preventDefault();
            setSubmitted(true);
        });
    }, []);

  return (
    <div className='messagesForm'>
      <form>
        <textarea
        rows={5}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button id="submit">Send</button>
      </form>
        <p>Max 250 Characters</p>
        {submitted && <p>Message Submitted!</p>}
    </div>
  );
}

export default MessagesForm;