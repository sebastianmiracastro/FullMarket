import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../../Styles/SeeProfileUser-Styles/SeeProfileUser-Styles.css'


export const ProfileUser = () => {

  const nameUser = window.localStorage.getItem('nameUser')

  const [dataUser, setDataUser] = useState([])

  useEffect((e) => {
    fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/PruebaNotificaciones`
    ).then((res) => res.json())
    .then((data) => setDataUser(data))
  })

  return (
    <div>
      {
        dataUser.map((e, i) => (
          <div className='Container-DataUser' key={i}>
            <p>{e.name}</p>
          <p>{e.address}</p>
          <p>{e.department}, {e.municipality}</p>
          <p>{e.phone}</p>
          <p>{e.email}</p>
          <img src={e.photo}
            className="imgCardProfileUserSee"
            alt={e.name}
          ></img>
          </div>

        ))
      }
    </div>
  )
}