import axios from "axios";
import React, { useEffect, useState } from "react";
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

    const [uidUserSendRejection, setUidUserSendRejection] = useState('')
    
    let formData = new FormData()

    const TypeNoti = 'Rechazado'

    const rejection = async (userName, productName) => {
        await fetch(
            `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${userName}` 
        )
        .then((res) => res.json())
        .then((data) => setUidUserSendRejection(data[0].uid))
        .then(() => { 
            setTimeout(async () => {
                console.log(uidUserSendRejection);
                formData.append('usersendnoti', uiduser)
                formData.append('userreceivernoti', uidUserSendRejection)
                formData.append('userreceivernotiproduct', productName)
                formData.append('typenoti', TypeNoti)
                await axios.post(
                    `https://fullmarket-provitional-backend.herokuapp.com/notification/sendnotification`, formData
                ).then((res) => console.log(res.data)).catch((err) => console.log(err));
            }, 10000)
        })
    }
    

    /* Endpoinst de los que hable en los audios =

    2Paso. 

    https://fullmarket-provitional-backend.herokuapp.com/notification/sendnotification

    Metodo = Post

    Se envia la notificacion, este paso lo haria yo, si el paso anterior queda funcionando, si puede hacer lo primero
    lo otro seria "Sencillo".

    Error = Se le tiene que dar doble clic al boton rechazar para que ejecute correctamente

    3Paso.

    https://fullmarket-provitional-backend.herokuapp.com/notification/deleteNotification/<string:uidNoti>

    Metodo = Delete

    <string:uidNoti> = Se le pasa lo del UID de la notificacion, en el mapeo de la parte de abajo, vas a ver como se llama, ayudame con esto nata
    me estoy comiendo la vida 

    */

    return (
        <>
        {noti.map((e, i) => (
            <div className="cont-noti" key={i}>
                <h1>{e.UIDNoti}</h1>
                <h3>{e.userSendNoti}</h3>
                <p>{e.userReceiverNotiProduct}</p>
                <p>{e.typeNoti}</p>
                <div>
                    <button onClick={() => rejection(e.userSendNoti, e.userReceiverNotiProduct)}>Rechazar</button>
                    <button>Revisar Perfil</button>
                    <button>Aceptar</button>
                </div>
            </div>
        ))}
        </>
    )
}
