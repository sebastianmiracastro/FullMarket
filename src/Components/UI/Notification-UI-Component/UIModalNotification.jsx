import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../../Styles/Main-Styles/MainStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const UIModalNotification = () => {
  const [noti, setNoti] = useState([]);
  const uiduser = window.localStorage.getItem("uiduser");
  const urlconfig = `https://fullmarket-provitional-backend.herokuapp.com/notification/getnotificationuser/${uiduser}`;

  const showNotification = async (e) => {
    await fetch(urlconfig)
      .then((res) => res.json())
      .then((data) => setNoti(data))
      .catch((err) => {
        "";
      });
  };

  useEffect((e) => {
    showNotification();
  });

  /* --------------------- LOGICA PARA RECHAZAR LA NOTIFICACIÖN --------------------------- */

  let formData = new FormData();

  const TypeNoti = "Rechazado";

  const rejection = async (userName, productName, uidProduct) => {
    swal({
      title: "Enviando respuesta de rechazo",
      text: "Espere un momento...",
      icon: "info",
      timer: "5000000",
    });
    await fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${userName}`
    )
      .then((res) => res.json())
      .then((data) => {
        const urluser = data[0].uid;
        const nameUserInSession = window.localStorage.getItem('nameUserInSession')
        formData.append("usersendnoti", nameUserInSession);
        formData.append("userreceivernoti", urluser);
        formData.append("userreceivernotiproduct", productName);
        formData.append("typenoti", TypeNoti);
      })
      .then(() => {
        setTimeout(async () => {
          await axios
            .post(
              `https://fullmarket-provitional-backend.herokuapp.com/notification/sendnotification`,
              formData
            )
            .then(() =>
              axios.delete(
                `https://fullmarket-provitional-backend.herokuapp.com/notification/deleteNotification/${uidProduct}`,
                swal({
                  title: "Respuesta enviada",
                  text: "Notificación Eliminada",
                  icon: "success",
                  timer: "2000",
                })
              )
            );
        }, 3000);
      });
  };

  const acceptRejection = async (uidProduct) => {
    swal({
      title: "Eliminando Notificación. Espere...",
      icon: "info",
      timer: "5000000",
    });
    axios
      .delete(
        `https://fullmarket-provitional-backend.herokuapp.com/notification/deleteNotification/${uidProduct}`
      )
      .then(() => {
        swal({
          title: "Notificación Eliminada",
          icon: "success",
          timer: "2000",
        });
        window.location.reload(true);
      });
  };

  /* -------------------------------- LOGICA PARA REDIRECCIONAR A CHAT PRIVADO -------------------------------------- */

  const navi = useNavigate();

  const collectDataToRedirectChat = async (userName, productName) => {
    swal({
      title: "Redireccionando al Chat",
      icon: "info",
      timer: "2000",
    })
    .then(() => {
        window.localStorage.setItem("nameUserToContact", userName);
        window.localStorage.setItem("nameProductApply", productName)
      })
      .then(() => {
        navi("/LoggedUser/PrivateChat");
        swal({
          title: "Redireccionado",
          text: "¡Mucha suerte, gracias por preferirnos!",
          icon: "success",
          timer: "2000",
        });
        window.location.reload(true)
      });
  };

  /* ----------------------------------------- Ver Perfil Usuario ------------------------------- */

  const nav = useNavigate();

  const recolectDataToSeeProfile = async (userName) => {
    await fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${userName}`
    )
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem("tempary?", data[0].uid);
        window.localStorage.setItem("nameUser", userName);
        nav("/LoggedUser/NotificationReview/ProfileUser");
      });
  };

  /* ------------------------------------------------------------------------------------------- */

  return (
    <>
      {noti.map((e, i) => (
        <div className="cont-noti" key={i}>
          {e.typeNoti === TypeNoti ? (
            <>
              <h3><b>{e.userSendNoti}</b> ha <b>rechazado</b> tu solicitud al producto: </h3>
              <p>{e.userReceiverNotiProduct}</p>
              <button onClick={() => acceptRejection(e.UIDNoti)}
                className="btn btn-success text-button-modal aceptar">
                Aceptar
              </button>
            </>
          ) : (
            <>
              <h3><b>{e.userSendNoti}</b> ha <b>aplicado</b> a tu producto: </h3>
              <p>{e.userReceiverNotiProduct}</p>
              <div className="buttons-modal-notification">
                <button
                  onClick={() =>
                    rejection(
                      e.userSendNoti,
                      e.userReceiverNotiProduct,
                      e.UIDNoti
                    )
                  }
                  className="btn btn-danger text-button-modal"
                >
                  Rechazar
                </button>
                <button
                  onClick={() => recolectDataToSeeProfile(e.userSendNoti)}
                  className="btn fw-bold text-button-modal info"
                >
                  Revisar Perfil
                </button>
                <button
                  onClick={() => collectDataToRedirectChat(e.userSendNoti, e.userReceiverNotiProduct)}
                  className="btn text-button-modal aceptar"
                >
                  Enviar Mensaje
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
