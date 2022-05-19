import React from 'react'
import {ServiceNoBack} from '../../../Services/ServiceRegister/ServiceNoBack/ServiceNoBack'

function LayoutCards() {
      window.location.hash="";
      window.location.hash="Again-no-back-button";
      window.onhashchange=function() {window.location.hash="no-back-button"}   
  return (
    <div>LayoutCards</div>
  )
}

export default LayoutCards