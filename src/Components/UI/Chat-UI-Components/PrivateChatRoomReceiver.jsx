import React, { useEffect, useState } from "react";
import firebase from "firebase";

export const PrivateChatRoomReceiver = () => {
  const [mesage, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const getNameProduct = window.localStorage.getItem("nameProductApply");

  const nameUserToContact = window.localStorage.getItem("nameUserToContact");

  const userSendDefined = window.localStorage.getItem("userSendDefined");

  const nameUserInSession = window.localStorage.getItem("nameUserInSession");

  const currentMessage = () => {
    firebase
      .database()
      .ref(`Chat/${userSendDefined}-${nameUserToContact}-${getNameProduct}`)
      .on("value", (snapashot) => {
        const current = snapashot.val();
        if (current != null) {
          setMessages(current);
        }
      });
  };

  useEffect(() => {
    currentMessage();
  });

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendNewMessage = (e) => {
    e.preventDefault();
    const newMsg = {
      id: messages.length,
      uidUserSend: nameUserInSession,
      text: mesage,
    };

    firebase
      .database()
      .ref(
        `Chat/${userSendDefined}-${nameUserToContact}-${getNameProduct}/${newMsg.id}`
      )
      .set(newMsg);
    setMessage("");
  };

  return (
    <form onSubmit={sendNewMessage}>
      <div>
        {messages.map((message) => (
          <ol>
            <li key={message.id}>{message.text}</li>
          </ol>
        ))}
      </div>
      <input onChange={updateMessage} type="text" />
    </form>
  );
};
