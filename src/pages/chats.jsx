import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000", { transports: ['websocket'] });

const Home = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketInitializer();
    // return () => {
    //   socket.disconnect();
    // };
  }, []);


  const socketInitializer = async () => {
    socket.on("sendMsgFromBack", (msg) => {
      setMessages((currentMsg) => {
        return [
          ...currentMsg,
          msg,
        ]
      });
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    socket.emit("sendMsgFromFront",
      {
        "author": username.toString(), "msgTxt": e.target.firstChild.value
      },
    );
  }



  return (
    <div>
      <h1>Chat app</h1>
      <h1>Enter a username</h1>
      <input onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            {index + 1}: {msg.author} == {msg.msgTxt}
          </div>
        ))}
        <br />
        <form onSubmit={handleSubmit}>
          <input
            name="message"
            placeholder="enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete={"off"}
          />
          <button>Send ...</button>
        </form>
      </div>
    </div>
  );
};

export default Home;