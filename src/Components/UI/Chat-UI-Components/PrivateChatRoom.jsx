import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import '../../Styles/PrivateChatRoom-Styles/PrivateChatRoom-Styles.css'
import { AiOutlineSend } from "react-icons/ai";
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MSID,
  appId: process.env.REACT_APP_APPID
};

firebase.initializeApp(firebaseConfig)

export const PrivateChatRoom = () => {

  const [mesage, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const getNameProduct = window.localStorage.getItem('nameProductApply')

  const nameUserToContact = window.localStorage.getItem('nameUserToContact')

  const nameUserInSession = window.localStorage.getItem('nameUserInSession')

  const currentMessage = () => {
    firebase.database().ref(`Chat/${nameUserInSession}-${nameUserToContact}-${getNameProduct}`).on('value', snapashot => {
      const current = snapashot.val();
      if (current != null) {
        setMessages(current)
      }
    })
    console.clear()
  }

  useEffect(() => {
    console.clear()
    currentMessage()
  }) 

  const updateMessage = (e) => {
    setMessage(e.target.value)
  }

  const sendNewMessage = (e) => {
    e.preventDefault();
    const newMsg = {
      id: messages.length,
      uidUserSend: nameUserInSession,
      text: mesage
    };

    firebase.database().ref(`Chat/${nameUserInSession}-${nameUserToContact}-${getNameProduct}/${newMsg.id}`)
      .set(newMsg);
      setMessage('')
      console.clear()
  }

  return (
<div className='principalContainer'>
      <div className='contChat'>
      <form className='formChat' onSubmit={sendNewMessage}>
      <div>
        {
          messages.map(message => (
            <ul className="d-flex flex-column " key={message.id}>
              <li>{message.text}</li>
              <li className="userSend">{message.uidUserSend}</li>
            </ul>
          ))
        }
      </div>
      <div className="d-flex justify-content-center w-100">
        <input className="inputMessage" onChange={updateMessage} value={mesage} type="text" />
        <AiOutlineSend className="SendMessageIcon" onClick={sendNewMessage} />
      </div>
    </form>
    </div>
    </div>
  )
}

// Background Naranja Grandiant bg1.svg
// ContenedorChat, Fondo navbar, Centrar 