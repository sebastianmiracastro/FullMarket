import {useState, useEffect} from 'react'
import { UIDataUser } from '../../UI/UIDataUser/UIDataUser';

export const LayoutDateUser=()=> {
  const [dataUser, setDataUser] = useState();
  const uidUsers = localStorage.getItem('uiduser')

  const URLDATAUSER=`https://fullmarket-provitional-backend.herokuapp.com/getoneuser/${uidUsers}`
  
  const toShowDataUser = async()=>{
        await fetch(`https://fullmarket-provitional-backend.herokuapp.com/getoneuser/${uidUsers}`)
        .then((res)=>res.json())
        .then((data)=>{
            setDataUser(data)
        });
  }

  useEffect(()=>{
    toShowDataUser()
  }, [])
  console.log(dataUser);
  return (
    <div>
        <>
        {/* {dataUser.name} */}
        </>
        {/* {dataUser.map((element) => (
            <UIDataUser>
                nameUser={element.name}

            </UIDataUser>
        ))} */}
    </div>
  )
}
