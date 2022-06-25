import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useNavigate } from 'react-router-dom';

export const SeeChatUser = () => {

  const [op, setOp] = useState([])

  const currentMessage = () => {
    const tao = []
    firebase.database().ref(`Chat/`).on('value', snapashot => {
      const current = snapashot.val();
      if (current != null) {
        const data = Object.keys(current)
        const nameUserInSession = window.localStorage.getItem('nameUserInSession')
        data.map((e) => {
          const values = e.split('-')
          if (values.indexOf(nameUserInSession) > -1) {
            return tao.push(e)
          }
        });
      }
      setOp(tao)
    })
  }

  useEffect(() => {
    console.clear()
    currentMessage()
  }) 

  const nav = useNavigate()
    
  return (
    <div>
      {
        op.map((e) => (
          <>
          <p>{e.split('-')[0]}</p>
          <p>{e.split('-')[1]}</p>
          <p>{e.split('-')[2]}</p>
          <button onClick={() => {
            window.localStorage.setItem('userSendDefined', e.split('-')[0])
            window.localStorage.setItem('nameUserToContact', e.split('-')[1])
            window.localStorage.setItem('nameProductApply', e.split('-')[2])
            nav('/LoggedUser/PrivateChat/Receiver')
          }}>ir al chat</button>
          </>
        ))
      }
    </div>
  )
}
