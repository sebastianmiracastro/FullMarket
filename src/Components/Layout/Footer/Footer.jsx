import React from 'react';
import '../../Styles/Footer-Styles/FooterStyles.css';
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

export const Footer = () => {
    return (
    <div className="footer-dark">
        <footer>
            <div className="col item social">
                <a href="https://www.facebook.com/profile.php?id=100076056153584"><i className="icon ion-social-facebook"><FaFacebookF /></i></a>
                <a href="#"><i className="icon ion-social-twitter"><FaWhatsapp /></i></a>
                <a href="https://www.linkedin.com/mwlite/school/servicio-nacional-de-aprendizaje-sena-"><i className="icon ion-social-snapchat"><FaLinkedin/></i></a>
            </div>
            <p className="copyright">FullMarket © 2022. Todos los derechos reservados.</p>
        </footer>
    </ div>
    )
}
