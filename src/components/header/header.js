import React from "react";
import "./header.css";
import HeaderPeople from "../../assets/header-people.svg";
import Vector from "../../assets/header-vector.svg";
import HeaderImg from "../../assets/header.svg";

const Header = () => {
  return (
    <>
      <div className="header-text">
        <div className="header-btn">Markazlarimiz</div>
        <div className="header-title">
          Bizning mutaxassislarimiz bilan ko'nikmalaringizni ko'taring!
          <span className="">
            <img src={Vector} alt="vector effect" className=" vector" />
          </span>
        </div>
        <div className="header-text-img mt-5">
          <img src={HeaderPeople} alt="We teachers cards" />
        </div>
        <div className="courses">
          <div className="courses-btn">Kurslarni o'rganing</div>
          <a
            href="https://youtu.be/X_rn32Jn4xM?si=rED8KNzhUzn6pNSy"
            target="_blank"
            className="courses-play"
            rel="noreferrer"
          >
            <i class="fa-solid fa-circle-play"></i>
            Qanday ishlaydi
          </a>
        </div>
      </div>
      <div className="header-img">
        <img src={HeaderImg} alt="Header img" />
      </div>
    </>
  );
};

export default Header;
