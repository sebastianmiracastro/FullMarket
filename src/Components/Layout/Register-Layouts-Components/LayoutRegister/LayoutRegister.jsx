import axios, { Axios } from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import '../../../Styles/Register-Styles/StylesRegister/StylesRegister.css'
import { UIButtonsRegister } from '../../../UI/Register-UI-Components/UIButtonsRegister/UIButtonsRegister'
import { UIInputRegister } from '../../../UI/Register-UI-Components/UIRegister/UIInputRegister/UIInputRegister'

export const LayoutRegister=()=> {

  var formData = new FormData();
  const navigate = useNavigate()

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

  const[msgEmail, setMsgEmail]=useState("")
  const[msgName, setMsgName]=useState("")
  const[msgAlias, setMsgAlias]=useState("")
  const[msgPassword, setMsgPassword]=useState("")
  const[msgPhone, setMsgPhone]=useState("")
  const[ msgaddress, setMsgAddress]=useState("")
  const [terms, setTerms] = useState(false);
  const [msgCheck, setMsgCheck] = useState();

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
    
    axios.post('https://fullmarket-provitional-backend.herokuapp.com/createuser', formData).then((res => {
      if(res){
        swal({
          title: "¡Bien hecho, ahora formas parte de FullMarket, bienvenido!",
          icon: "success"
        })
        navigate("/LayoutCards")
      }
    })).catch((err => {
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

  const handleCharacterName=()=>{
    let validationName= /^[a-zA-Z\t]+|(^$)/
    let text
    if(name.match(validationName)){
      text="Información correcta"
      setMsgName(text)
    }else{
      text="Información incorrecta, Solo puedes añadir letras, minimo 3 letras maximo 16 letras"
      setMsgName(text)
    }
  }
  const handleCharacterEmail =()=>{
  let validationEmail =/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  let text
  if(email.match(validationEmail)){
    text="Información valida"
    setMsgEmail(text)
  }else{
    text="Información incorrecta, por favor verifiquela"
    setMsgEmail(text)
    }
  }
  
  const handleCharacterAlias=()=>{
    let validationAlias= /^([a-zA-Z]\w*?){2,10}|(^$)/
    let text
    if(alias.match(validationAlias)){
      text="Información correcta"
      setMsgAlias(text)
    }else{
      text="Información incorrecta, Solo puedes añadir letras, minimo 3 letras maximo 10 letras"
      setMsgAlias(text)
    }
  }

const handleCharacterAddress=()=>{
    let validationadress=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    let text
    if(address.match(validationadress)){
      text="Información correcta"
      setMsgAddress(text)
    }else{
      text="Información incorrecta"
      setMsgAddress(text)
    }
}
  const handleCharacterPassword=()=>{
    let validationPassword= /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/
    let text
    if(password.match(validationPassword)){
      text="Información correcta"
      setMsgPassword(text)
      
    }else{
     text ="Contraseña incorrecta, desbes añadir letras, minúsculas, mayúsculas y numeros, debe ser minimo de 7, maximo 10 letras y/o numeros.."
      setMsgPassword(text)
    }
  }
  const handleCharacterPhone=()=>{
    let validationPhone= /^[0-9]{7,12}$/
    let text
    if(phone.match(validationPhone)){
      text="Información correcta"
      setMsgPhone(text)
    }else{
      text="Información incorrecta, desbes añadir solo numeros, debe ser minimo de 7 numeros, maximo 10 numeros."
      setMsgPhone(text)
    }
  }

  const handleTerms=(e)=>{
     setTerms(e.target.checked)
     let text
     if(terms === false){
      text="Registro completo"
       setMsgCheck(text)
     }
     else{
       text="Debes aceptar los termino y condiciones para  lpoder registrate"
       setMsgCheck(text)
       
     }
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

          <UIInputRegister 
            typeInputtRegister="name" 
            nameInputtRegister='name' 
            valueInputtRegister={name}
            onChangeInputtRegister={(e) => setName(e.target.value)} 
            placeholderInputtRegister='enter your name' 
            onKeyUpInputtRegister={handleCharacterName} required={handleCharacterName}>
          </UIInputRegister>
          <p className='alertIcorrect'>{msgName}</p>

          <UIInputRegister 
            typeInputtRegister="alias" 
            nameInputtRegister='alias'
            valueInputtRegister={alias}
            onChangeInputtRegister={(e) => setAlias(e.target.value)}
            placeholderInputtRegister='enter your alias'
            onKeyUpInputtRegister={handleCharacterAlias} required>
          </UIInputRegister>
          <p className='alertIcorrect'>{msgAlias}</p>

          <UIInputRegister 
            typeInputtRegister="email" 
            nameInputtRegister='email'
            valueInputtRegister={email}
            onChangeInputtRegister={(e) => setEmail(e.target.value)} 
            placeholderInputtRegister='enter your email'
            onKeyUpInputtRegister={handleCharacterEmail} required>
          </UIInputRegister>
          <p className='alertIcorrect'>{msgEmail}</p>

          <input type="password" 
           name='password' 
           value={password} 
           onChange={(e) => setPassword(e.target.value)} 
           placeholder='enter your password' 
           onKeyUp={handleCharacterPassword} required>
          </input>
          <p className='alertIcorrect'>{msgPassword}</p>
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
          <UIInputRegister
           typeInputRegister="address" 
           nameInputtRegister='address' 
           valueInputtRegister={address} 
           onChangeInputtRegister={(e) => setAddress(e.target.value)}
           onKeyUpInputtRegister={handleCharacterAddress} 
           placeholderInputtRegister='enter your address'
            required>
          </UIInputRegister>
          <p className='alertIcorrect'>{msgaddress}</p>
          <UIInputRegister
           typeInputtRegister="phone" 
           nameInputtRegister='phone' 
           valueInputtRegister={phone}
           onChangeInputtRegister={(e) => setPhone(e.target.value)} 
           placeholderInputtRegister='entert your phone' 
           onKeyUpInputtRegister={ handleCharacterPhone} required>
          </UIInputRegister>
          <p className='alertIcorrect'>{msgPhone}</p>

          <div className='photos'>
            <UIInputRegister className='photo' 
            typeInputtRegister="file" 
            nameInputtRegister='photo' 
            onChangeInputtRegister={(e) => setPhoto(e.target.files[0])} 
            placeholderInputtRegister='enter your profile picture' required>
            </UIInputRegister>
          </div>
        </div>
      </div>          
      <div className='termsAccep'>
        <a  className='terms'><input type="checkbox" name='terms' className='termsRegister' id='termsRegister' checked={terms} onClick={handleTerms} required></input>Al hacer click en "REGISTRARSE", Acepta Nuestras Condiciones, la politica <br></br>de datos y la politica de cookies.</a> 
        <p className='alertIcorrects'>{msgCheck}</p>
      </div>
        <UIButtonsRegister
         type="submit" 
         classButtonsRegister='btnSubmirRecord'
         Buttons= 'btnSubmirRecord'
         nameButtonsRegister='Registrarse'
        ></UIButtonsRegister>
       <div className="hrR" />
       <a className='redirectLogin' href='/Login'>¿Ya tienes una cuenta?</a>
    </div>
     
  </form>
  )
}
