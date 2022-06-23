import React, { useEffect, useState } from 'react'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCoBoVAvHzfGIrGXIPCdZB9uHnZBp51zGs",
  authDomain: "fullmarket-e6156.firebaseapp.com",
  databaseURL: "https://fullmarket-e6156-default-rtdb.firebaseio.com",
  projectId: "fullmarket-e6156",
  storageBucket: "fullmarket-e6156.appspot.com",
  messagingSenderId: "759346213407",
  appId: "1:759346213407:web:9812ea45b85e6d1ca15b2a"
};

firebase.initializeApp(firebaseConfig)

export const PrivateChatRoom = () => {

  const [mesage, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const getNameProduct = window.localStorage.getItem('nameProductApply')

  const getUserUid = window.localStorage.getItem('uidUserToContact')

  const getUserInSessionUID = window.localStorage.getItem('uiduser')

  const currentMessage = () => {
    firebase.database().ref(`${getUserInSessionUID} - ${getUserUid} - ${getNameProduct}/`).on('value', snapashot => {
      const current = snapashot.val();
      if (current != null) {
        setMessages(current)
      }
    })
  }

  useEffect(() => {
    currentMessage()
  }) 

  const updateMessage = (e) => {
    setMessage(e.target.value)
  }

  const sendNewMessage = (e) => {
    e.preventDefault();
    const newMsg = {
      id: messages.length,
      uidUserSend: getUserInSessionUID,
      text: mesage
    };

    firebase.database().ref(`${getUserInSessionUID} - ${getUserUid} - ${getNameProduct}/${newMsg.id}`)
      .set(newMsg);
      setMessage('')
  }

  return (
    <form onSubmit={sendNewMessage}>
      <div>
        {
          messages.map(message => (
            <ol>
              <li key={message.id}>{message.text}</li>
            </ol>
          ))
        }
      </div>
      <input onChange={updateMessage} type="text" />
    </form>
  )
}