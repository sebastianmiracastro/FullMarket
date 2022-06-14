import React from 'react';
import '../../Styles/Footer-Styles/FooterStyles.css';
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

export const Footer = () => {
    return (
    <div class="footer-dark">
        <footer>
{/*             
                <div className="row">
                    <div className=" item">
                        <h3>ACERCA DE FULLMARKET</h3>
                        <ul>
                            <li><a href="#">Lo amamos</a></li>
                            <li><a href="#">señor</a></li>
                            <li><a href="#">Ramirez</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>CONTACTENOS</h3>
                        <ul>
                            <li><a href="#">Uy,</a></li>
                            <li><a href="#">no</a></li>
                            <li><a href="#">me crea</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>FullMarket</h3>
                        <p>Praesent sed lobortis mi.</p>
                    </div>
                </div>

 */}


                <div className="col item social">
                        <a href="https://www.facebook.com/profile.php?id=100076056153584"><i className="icon ion-social-facebook"><FaFacebookF /></i></a>
                        <a href="#"><i className="icon ion-social-twitter"><FaWhatsapp /></i></a>
                        <a href="#"><i className="icon ion-social-snapchat"><FaLinkedin/></i></a>
                    </div>
                <p className="copyright">FullMarket © 2022</p>
        </footer>
    </ div>
    )
}
