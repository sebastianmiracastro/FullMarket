import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import axios from 'axios';
import  StyleLayoutRegister from '../../../Styles/StyleRegister/StyleLayoutRegister/StyleLayoutRegister.css'
import { UIButtons } from '../../UI/UIButtons/UIButtons';

export const LayoutRegister=()=> {
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState();
  const [dpto, setDpto] = useState([]);
  const [ciudades, setCiudades] = useState([]);
 
  var formData = new FormData();

  const navigate = useNavigate()

  const HandleSubmit= async (e)=>{
    e.preventDefault()
    formData.append("name", name)
    formData.append("alias", alias)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("department", department)
    formData.append("municipality", municipality)
    formData.append("address", address)
    formData.append("phone", phone)
    formData.append("photo", photo)  
    
    console.log(formData);
    axios.post('https://backend-fullmarket-py.herokuapp.com/createuser', formData).then((res => {
     console.log(res);
      if(res){
        navigate("/LayoutCards")
         swal({
            title: "¡Bien hecho, ahora formas parte de FullMarket, bienvenido!",
            icon: "success"
        })

      }
    })).catch((err => {
      console.log(err);
      if(err){
         swal({
            title: "Tienes un error al registrarte, intentalo de nuevo",
            icon: "error"
        })
      }
    }))
  }
  let URLDepart = 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json'

  let getDptos = () => {
    axios.get(URLDepart).then(res => {
      setDpto(res.data)
    })
  }

  let getMuni = (e) => {
    let docMuni = document.getElementById("select-municipios")
    dpto.forEach(ele => {
      if (ele.departamento === e.target.value) {
        setCiudades(ele.ciudades);
      }
    })
  }

  useEffect(() => {
    getDptos();
  }, [])

  return (
   <form onSubmit={HandleSubmit} className="layoutRegister" >
    <div className='completeRecord'>
    <h1 className='prom'>REGISTRATE AQUÍ</h1>
      <div className='files'>
        <div className='filesRegister'>  

          <input type="name" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name' required></input>
          <input type="alias" name='alias' value={alias} onChange={(e) => setAlias(e.target.value)} placeholder='enter your alias' required></input>
          <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' required></input>
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password'  required></input>
        </div>
        <div className='fileRegister'>
          <select className='selectDepart' onInput={getMuni} type="department" name='department' id="" value={department} onChange={(e) => setDepartment(e.target.value)} >
            <option value="Select">Select a Department</option>
            {
              dpto.map(dep => (
                <option key={dep.id} value={dep.departamento}>{dep.departamento}</option>
              ))
            }
          </select>
          <select className='selectMuni' id="select-municipios" type="municipality" name ='municipality' value={municipality} onChange={(e) => setMunicipality(e.target.value)}>
            <option value="Select">Select a Municipality</option>
            {
              ciudades.map(ci => (
                <option key={ci} value={ci}>{ci}</option>
              ))
            }
          </select>
          <input type="address" name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='enter your address' required></input>
          <input type="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='entert your phone' required></input>
      
          <div className='photos'>
            <input className='photo' type="file" name='photo' onChange={(e) => setPhoto(e.target.files[0])} placeholder='enter your profile picture' required></input>
          </div>
        </div>
      </div>          
      <div className='termsAccep'>
        <label className='terms'><input type="checkbox" name='terms' className='termsRegister' id='termsRegister' required='Debes aceptar nuestros terminos y condiciones para poder registrarte'></input>Al hacer click en "REGISTRARSE", Acepta Nuestras Condiciones, la politica <br></br>de datos y la politica de cookies.</label> 
      </div>
        <UIButtons
         type="submit" 
         classButtons='btnSubmirRecord'
         Buttons= 'btnSubmirRecord'
         nameButtons='Registrarse'
        ></UIButtons>
       <div className="hr" />
       <a href="foo">Ya tienes una cuenta</a>
    </div>
     
  </form>
  )
}
