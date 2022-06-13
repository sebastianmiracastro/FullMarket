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

    const rejection = async (userName) => {
        // console.log(userName);
        await fetch(
            `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${userName}` 
        )
        .then((res) => res.json())
        .then((data) => console.log(data[0].uid))
    }
    

    /* Endpoinst de los que hable en los audios =

    ERRORES = No me guarda el nombre del usuario, que ya intente en un state, pasarlo como parametro, y nada funciona
    ayudame please

    1Paso.

    `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/<string:name>

    Metodo = Get

    <string:name> = ahi va el nombre del usuario, esa peticion trae todos los datos de un usuario, 
    de esa consulta lo unico que hay que guardar es el uid del usuario.

    2Paso. 

    https://fullmarket-provitional-backend.herokuapp.com/notification/sendnotification

    Metodo = Post

    Se envia la notificacion, este paso lo haria yo, si el paso anterior queda funcionando, si puede hacer lo primero
    lo otro seria "Sencillo".

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
                    <button onClick={() => rejection(e.userSendNoti)}>Rechazar</button>
                    <button>Revisar Perfil</button>
                    <button>Aceptar</button>
                </div>
            </div>
        ))}
        </>
    )
}
