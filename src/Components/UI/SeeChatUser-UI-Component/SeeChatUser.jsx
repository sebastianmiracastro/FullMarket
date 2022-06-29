import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useNavigate } from 'react-router-dom';
import '../../Styles/SeeChatUser-Styles/SeeChatUser-Styles.css'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/SeeChatUser-Styles/SeeChatUser-Styles.css'

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

  const nameUser = window.localStorage.getItem('nameUserInSession')
    
  return (
    <div className='ContainerNotificationsChat'>
      { nameUser === op.map((e) => e.split('-')[1]) ? (
        ''
      ) 
      : 
      (
        <>
        {
          op.map((e) => (
            <div className='ContainerChats py-2 rounded'>
              {e.split('-')[0] === nameUser ? (
                <p>tienes un mensaje pendiente de <strong>{e.split('-')[1]}</strong></p>
              ) : (
                <p>El propietario <strong>{e.split('-')[0]}</strong> te ha enviado un mensaje</p>
              )}
            <p >Producto: {e.split('-')[2]}</p>
            <div className='d-flex justify-content-center'>
            <button className='btn-GoChat btn-primary  fw-bold' 
            onClick={() => {
              window.localStorage.setItem('userSendDefined', e.split('-')[0])
              window.localStorage.setItem('nameUserToContact', e.split('-')[1])
              window.localStorage.setItem('nameProductApply', e.split('-')[2])
              nav('/LoggedUser/PrivateChat/Receiver')
            }}>Ir al chat</button>
            </div>
            </div>
          ))
        }
        </>
      )}
    </div>
  )
}
