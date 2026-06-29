import React from "react";
import "./footer.css";
import LogoLight from "../../assets/logo-light.svg";
import Apple from "../../assets/apple.svg";
import PlayStore from "../../assets/play-story.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer-contact">
        <div className="subscribe">
          <div className="footer-logo">
            <img src={LogoLight} alt="Sparkly logo light" />
            <span>Sparkly</span>
          </div>
          <div>
            <form action="" className="newslatter-form footer-sub">
              <div className="footer-email">
                <i class="fa-regular fa-envelope"></i>
                <input type="email" name="email" />
              </div>
              <button type="submit" className="footer-btn">Obuna</button>
            </form>
          </div>
        </div>
        <div className="company">
          <h3 className="footer-title">Kompanya</h3>
          <ul className="company-links">
            <li className="company-link">
              <a href="./">Murabbiylar</a>
            </li>
            <li className="company-link">
              <a href="./">Haqida</a>
            </li>
            <li className="company-link">
              <a href="./">Asosiy</a>
            </li>
            <li className="company-link">
              <a href="./">Aloqa</a>
            </li>
          </ul>
        </div>
        <div className="footer-courses">
          <h3 className="footer-title">Kurslar</h3>
          <ul className="courses-links">
            <li className="courses-link">
              <a href="./">Raqamli marketing</a>
            </li>
            <li className="courses-link">
              <a href="./">UI/UX Dezayner</a>
            </li>
            <li className="courses-link">
              <a href="./">Web Developer</a>
            </li>
            <li className="courses-link">
              <a href="./">Vizualizatsiya</a>
            </li>
            <li className="courses-link">
              <a href="./">AI/ML</a>
            </li>
          </ul>
        </div>
        <div className="download">
          <h3>Ilovamiz</h3>
          <ul className="download-links">
            <li className="download-link">
              <a href="./"><img src={Apple} alt="Apple logo" /> App store <i className="fa-solid fa-arrow-right"></i></a>
            </li>
            <li className="download-link">
              <a href="./"><img src={PlayStore} alt="PlayStore logo" /> Play store <i className="fa-solid fa-arrow-right"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-network">
        <div className="footer-copy">
          <p>
            © Dasturchi: <a href="https://github.com/Abdurahim-Yoldoshev">Yo'ldoshev Abdurahim</a>
          </p>
        </div>
        <div className="footer-social">
          <ul>
            <li className="border p-1">
              <a href="./"><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li className="border p-1">
              <a href="./"><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li className="border p-1">
              <a href="./"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li className="border p-1">
              <a href="./"><i class="fa-brands fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
