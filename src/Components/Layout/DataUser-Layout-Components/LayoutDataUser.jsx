import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Components/Styles/DataUser-Styles/DataUserStyles.css';
import { UIButtonsDataUser } from '../../UI/DataUser-UI-Components/UIButtonsDataUser/UIButtonsDataUser';

export const LayoutDateUser=()=> {
  const [editName, setEditName] = useState("");
  const [editAlias, setEditAlias] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editDepartment, setEditDepartment] = useState("");
  const [editMunicipality, setEditMunicipality] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editPhoto, setEditPhoto] = useState();
  const uidUsers = localStorage.getItem('uiduser')

  const toShowDataUser = async()=>{
        await fetch(`https://fullmarket-provitional-backend.herokuapp.com/getoneuser/${uidUsers}`)
        .then((res)=>res.json())
        .then((data)=>{
            setEditName(data.name)
            setEditAlias(data.alias)
            setEditEmail(data.email)
            setEditPassword(data.password)
            setEditDepartment(data.department)
            setEditMunicipality(data.municipality)
            setEditAddress(data.address)
            setEditPhone(data.phone)
            setEditPhoto(data.photo)
        });
  }

  useEffect(()=>{
    toShowDataUser()
  }, [])
  const navigate = useNavigate();
 const dirrec =()=>{
     navigate("/LoggedUser/EditUser")
 }
  
  return (
    <div> 
        <div className='imgUser'>
          <img className='imgUser' src={editPhoto}/>
        </div>
        <div className='dates'>
        <div className='dataUser'>
          <p>{editName}</p>
          <p>{editAlias}</p>
          <p>{editEmail}</p>
        </div>
        <div className='dataUsers'>
          <p>{editDepartment}</p>
          <p>{editMunicipality} </p>
          <p>{editAddress} </p>
          <p>{editPhone}</p>
        </div>
        </div>
        <UIButtonsDataUser
         onClickDataUser={dirrec}
         nameButtonsDataUser="Editar"
        ></UIButtonsDataUser>
    </div>
  )
}