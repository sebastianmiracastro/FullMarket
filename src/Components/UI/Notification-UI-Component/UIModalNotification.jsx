import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import '../../Styles/Main-Styles/MainStyle.css'

export const UIModalNotification = () => {

    const [noti, setNoti] = useState([]);
    const uiduser = window.localStorage.getItem("uiduser");
    const urlconfig = `https://fullmarket-provitional-backend.herokuapp.com/notification/getnotificationuser/${uiduser}`;

    const showNotification = async (e) => {
        await fetch(urlconfig)
        .then((res) => res.json())
        .then((data) => setNoti(data))
        .catch((err) => {
            ''
        });
    };

    useEffect((e) => {
        showNotification();
    })

    const [nameUserInSession, setNameUserInSession] = useState('')

    useEffect((e) => {
        fetch(
            `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuser/${uiduser}`
        ).then((res) => res.json())
        .then((data) => setNameUserInSession(data.name))
    })

    /* --------------------- LOGICA PARA RECHAZAR LA NOTIFICACIÖN --------------------------- */
    
    let formData = new FormData()

    const TypeNoti = 'Rechazado'

    const rejection = async (userName, productName, uidProduct) => {
        swal({
            title: "Envienda Respuesta De Rechazo",
            text: "Espere un momento",
            icon: "info",
            timer: "5000000"
        })
        await fetch(
            `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${userName}` 
        )
        .then((res) => res.json())
        .then((data) =>  { const urluser = (data[0].uid)
            formData.append('usersendnoti', nameUserInSession)
            formData.append('userreceivernoti', urluser)
            formData.append('userreceivernotiproduct', productName)
            formData.append('typenoti', TypeNoti)}
        )
        .then(() => { 
            setTimeout(async () => {
                await axios.post(
                    `https://fullmarket-provitional-backend.herokuapp.com/notification/sendnotification`, formData
                ).then(() => axios.delete(
                    `https://fullmarket-provitional-backend.herokuapp.com/notification/deleteNotification/${uidProduct}`,
                    swal({
                        title: "Respuesta enviada",
                        text: "Notificación Eliminada",
                        icon: "success",
                        timer: "2000"
                    })
                ))
            })
        })
    }

    const acceptRejection = async (uidProduct) => {
        swal({
            title: "Eliminando Notificación, Espere",
            icon: "info",
            timer: "5000000"
        })
        axios.delete(
            `https://fullmarket-provitional-backend.herokuapp.com/notification/deleteNotification/${uidProduct}`
        ).then(() => {
            swal({
                title: "Notificación Eliminada",
                icon: "success",
                timer: "2000"
            })
            window.location.reload(true)
        })
    }

    /* -------------------------------- LOGICA PARA REDIRECCIONAR A CHAT PRIVADO -------------------------------------- */

    const navi = useNavigate()

    const collectDataToRedirectChat = async (userName) => {
        swal({
            title: "Redireccionando Al Chat",
            icon: "info",
            timer: "5000000"
        })
        await fetch(
            `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${userName}` 
        ).then((res) => res.json())
        .then((data) => {
            window.localStorage.setItem('uidUserToContact', data[0].uid)
        }).then(() => {
            navi('/LoggedUser/PrivateChat')
            swal({
                title: "Redireccionado",
                text: "Suerte con tu intercambio",
                icon: "success",
                timer: "2000"
            })
        })
    }

    /* ----------------------------------------- Ver Perfil Usuario ------------------------------- */ 

    const nav = useNavigate()
    
    const recolectDataToSeeProfile = async (userName) => {
        await fetch(
            `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${userName}` 
        )
        .then((res) => res.json())
        .then((data) => {
        window.localStorage.setItem('tempary?', data[0].uid)
        window.localStorage.setItem('nameUser', userName)
        nav('/LoggedUser/NotificationReview/ProfileUser')
    })}


    /* ------------------------------------------------------------------------------------------- */

    return (
        <>
        {noti.map((e, i) => (
            <div className="cont-noti" key={i}>
                {e.typeNoti === TypeNoti ? (
                    <>
                        <h3>{e.userSendNoti}</h3>
                        <p>{e.userReceiverNotiProduct}</p>
                        <p>{e.typeNoti}</p>
                        <button onClick={() => acceptRejection(e.UIDNoti)}>Aceptar</button>
                    </>
                )
                    :
                    <>
                        <h3>{e.userSendNoti}</h3>
                        <p>{e.userReceiverNotiProduct}</p>
                        <p>{e.typeNoti}</p>
                        <div>
                            <button onClick={() => rejection(e.userSendNoti, e.userReceiverNotiProduct, e.UIDNoti)}>Rechazar</button>
                            <button onClick={() => recolectDataToSeeProfile(e.userSendNoti)}>Revisar Perfil</button>
                            <button onClick={() => collectDataToRedirectChat(e.userSendNoti)}>Aceptar</button>
                        </div>
                    </>
                } 
            </div>
        ))}
        </>
    )
}
