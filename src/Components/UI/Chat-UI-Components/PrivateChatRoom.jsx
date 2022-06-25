import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import '../../Styles/PrivateChatRoom-Styles/PrivateChatRoom-Styles.css'

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
      uidUserSend: nameUserInSession,
      text: mesage
    };

    firebase.database().ref(`Chat/${nameUserInSession}-${nameUserToContact}-${getNameProduct}/${newMsg.id}`)
      .set(newMsg);
      setMessage('')
  }

  return (
    <div className='principalContainer'>
      <div className='contChat'>
      <form className='formChat' onSubmit={sendNewMessage}>
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
    </div>
    </div>
  )
}

// Background Naranja Grandiant bg1.svg
// ContenedorChat, Fondo navbar, Centrar 