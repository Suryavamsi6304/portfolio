import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import { BsYoutube } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
    return (
      <footer className = 'footer'>
        <a href="#" className="footer__logo">
          PRIYANSHU
        </a>
        <ul className="permalinks">
          <li>
            {" "}
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About </a>
          </li>
          <li>
            {" "}
            <a href="#experience"> Experience</a>
          </li>
          <li>
            {" "}
            <a href="#services">Services</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#portfolio"> Portfolio</a>
          </li>
          <li>
            {" "}
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            {" "}
            <a href="#contact"> Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com">
            <AiFillFacebook />
          </a>
          <a href="https://youtube.com/therandomstuff">
            <BsYoutube />
          </a>
          <a href="https://instagram.com/priyanshu.777"><GrInstagram/></a>
        </div>

        <div className = 'footer__copyright'>
            <small>© All rights reserved.</small>
        </div>
      </footer>
    );
}

export default Footer
