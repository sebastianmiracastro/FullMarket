import React from 'react';
import '../../Styles/Footer-Styles/FooterStyles.css';
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

export const Footer = () => {
    return (
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>ACERCA DE FULLMARKET</h3>
                        <ul>
                            <li><a href="#">Lo amamos</a></li>
                            <li><a href="#">señor</a></li>
                            <li><a href="#">Ramirez</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>CONTACTENOS</h3>
                        <ul>
                            <li><a href="#">Uy,</a></li>
                            <li><a href="#">no</a></li>
                            <li><a href="#">me crea</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>FullMarket</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social">
                        <a href="#"><i class="icon ion-social-facebook"><FaFacebookF /></i></a>
                        <a href="#"><i class="icon ion-social-twitter"><FaTwitter /></i></a>
                        <a href="#"><i class="icon ion-social-snapchat"><FaLinkedin/></i></a>
                        <a href="#"><i class="icon ion-social-instagram"></i></a>
                    </div>
                </div>
                <p class="copyright">FullMarket © 2022</p>
            </div>
        </footer>
    </ div>



// {/* 
//      <>
//      <div className='footer-Page'>
//          <div className='col-1'>
//              <h1>ACERCA DE FULLMARKET</h1>
//              <ul>
//                  <p>Sobre nosotros</p>
//                  <p>Link 2</p>
//                  <p>Link 1</p>
//                  <p>Link 4</p>
//                  <p>Link 5</p>
//                  <p>Link 6</p>
//              </ul>
//          </div>
//          <div className='col-1'>
//              <h1>SIGUENOS</h1>
//              <ul>
//                  <p>Sobre nosotros</p>
//                  <p>Link 2</p>
//                  <p>Link 3</p>
//                  <p>Link 4</p>
//                  <p>Link 5</p>
//                  <p>Link 6</p>
//              </ul>
//          </div>
//      </div>
//      </>) */}
    )
}
