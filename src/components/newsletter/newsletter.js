import React from "react";
import "./newsletter.css";
import NewsLetterGirl from "../../assets/girl1.svg";
import NewsLetterGirl2 from "../../assets/girl2.svg";

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter-text">
        <div className="newsletter-title">
          Yangilanishlar uchun bizning yangiliklarimizga obuna bo'ling
        </div>
        <div className="newslatter-min-text">
          To'g'ridan-to'g'ri sizning qutingizga taqdim etilgan so'nggi
          yangiliklar, tushunchalar va yangilanishlar haqida xabardor bo'ling
        </div>
        <form action="" className="newslatter-form">
          <div>
            <i class="fa-regular fa-envelope"></i>
            <input type="email" name="email" />
          </div>
          <button type="submit">Obuna</button>
        </form>
      </div>
      <div className="newslatter-imges">
        <div><img src={NewsLetterGirl} alt="News letter Girl" /></div>
        <div><img src={NewsLetterGirl2} alt="News letter second girl" /></div>
      </div>
    </>
  );
};

export default NewsLetter;
