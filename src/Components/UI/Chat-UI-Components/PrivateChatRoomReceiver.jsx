import React, { useEffect, useState } from "react";
import firebase from "firebase";
import '../../Styles/PrivateChatRoom-Styles/PrivateChatRoom-Styles.css'
import { AiOutlineSend } from "react-icons/ai";
import * as bootstrap from 'bootstrap';
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import axios from "axios";

/* ¿Do they come to deal? */

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    width: 600,
    height: 730,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    border: "0.5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
})); 

export const PrivateChatRoomReceiver = () => {

  /* ------------------------- Modal Logic ------------------------------------ */

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }


  /* ------------------------ Delete Chat Logic  -------------------------------- */
  /* --------- In Delete Logic Delete Notification ------ */
  const uiduser = window.localStorage.getItem("uiduser");
  const urlconfig = `https://fullmarket-provitional-backend.herokuapp.com/notification/getnotificationuser/${uiduser}`;

  /* --------------- Finish Logic Delete Notification ------------ */

  const nav = useNavigate()
  
  const deleteChat = async () => {
    await fetch(urlconfig)
    .then((res) => res.json())
    .then((data) => { const notification = (data)
      notification.map((e) => {
        if(e.userReceiverNoti === uiduser && e.userReceiverNotiProduct === getNameProduct && e.userSendNoti === nameUserToContact){
          axios.delete(
            `https://fullmarket-provitional-backend.herokuapp.com/notification/deleteNotification/${e.UIDNoti}`
            ).then((obj) => {
              firebase.database().ref(`Chat/${userSendDefined}-${nameUserToContact}-${getNameProduct}`)
              .set({})
              nav('/')
              swal({
                title: "Peticion Completa",
                text: "Chat Eliminado",
                icon: "success",
                timer: "1500"
              })
            })
        }
      })
  })
  }

  const body = (
    <div className="modalWindowFeatures">
      <div style={modalStyle} className="cont-modal-notification">
        <div className="d-flex flex-column align-items-around">
          <div className="d-flex flex-row justify-content-around">
            <p className="text-white css-textReject">No llegamos a un acuerdo, quiero borrar el chat.</p>
            <button onClick={deleteChat}>Borrar</button>
          </div>
          <p className="text-center text-white">O</p>
          <div className="d-flex flex-row justify-content-around">
              <p className="text-white css-textReject">Hay acuerdo?, tu producto ya no estara disponible</p>
              <button>No disponible</button>
          </div>
        </div>
        <button className="btnOkModal" type="button" onClick={handleModalClose}>Aun no estoy seguro</button>
      </div>
    </div>
  );

  /* ------------------------------------------------------------------------------*/
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
      // console.clear()
  };

  useEffect(() => {
    // console.clear()
    currentMessage();
  });

  const updateMessage = (e) => {
    // console.clear()
    setMessage(e.target.value);
  };

  const sendNewMessage = (e) => {
    e.preventDefault();
    // console.clear()
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
    setMessage('');
    // console.clear()
  };

  return (
    <div className='principalContainer'>
      { userSendDefined === nameUserInSession ? (
        <button className="m-2 acordButton" onClick={handleModalOpen}>¿Acuerdo?</button>
      ) : (
        ''
      )
      }
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
    <Modal open={open} onClose={handleModalClose}>
      {body}
    </Modal>
    </div>
  );
};
