import React, { useState } from 'react'
import { useEffect } from 'react'
import firebase from 'firebase'

export const PrivateChat = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        firebase.database.ref('messages/').on('value', snapashot => {
            const currentMessages = snapashot.val();
            if (currentMessages != null){
                setMessages(currentMessages)
            }
        })
    })

    const handleSumbit = (e) => {
        e.preventDefault();
        const newMessage = {
            id: messages.length,
            text: message
        }

        firebase.database.ref(`messages/${newMessage.id}`)
            .set(newMessage);
        setMessage('')
    }

    return (
        <>
            <p>No Joda Mi Hermano</p>
        </>
    )
}
