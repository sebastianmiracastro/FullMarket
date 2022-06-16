import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../../Styles/SeeProfileUser-Styles/SeeProfileUser-Styles.css'


export const ProfileUser = () => {

  const nameUser = window.localStorage.getItem('nameUser')

  const [dataUser, setDataUser] = useState([])

  useEffect((e) => {
    fetch(
      `https://fullmarket-provitional-backend.herokuapp.com/users/getoneuserbyname/${nameUser}`
    ).then((res) => res.json())
    .then((data) => setDataUser(data))
  })

  return (
    <div>
      {
        dataUser.map((e, i) => (
          <div className='Container-DataUser' key={i}>
          <p className='textProfileUserSees'>{e.name}</p>
          <img src={e.photo}
            className="imgCardProfileUserSee"
            alt={e.name}
          ></img>
          <p className='textProfileUserSee'>{e.address}</p>
          <p className='textProfileUserSee'>{e.department}, {e.municipality}</p>
          <p className='textProfileUserSee'>{e.phone}</p>
          <p className='textProfileUserSee'>{e.email}</p>
          </div>
        ))
      }
    </div>
  )
}