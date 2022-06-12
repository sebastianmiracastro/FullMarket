import React, { useEffect, useState } from "react";
import '../../Styles/Main-Styles/MainStyle.css'

export const UIModalNotification = () => {

    const [noti, setNoti] = useState([]);
    const uiduser = window.localStorage.getItem("uiduser");
    const urlconfig = `https://fullmarket-provitional-backend.herokuapp.com/notification/getnotificationuser/${uiduser}`;

    const showNotification = async (e) => {
        await fetch(urlconfig)
        .then((res) => res.json())
        .then((data) => setNoti(data));
    };

    useEffect((e) => {
        showNotification();
    })

    return (
        <>
        {noti.map((e, i) => (
            <div className="cont-noti" key={i}>
                <h3>{e.userSendNoti}</h3>
                <p>{e.userReceiverNotiProduct}</p>
                <p>{e.typeNoti}</p>
            </div>
        ))}
        </>
    )
}
