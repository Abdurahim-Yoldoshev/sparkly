import React from 'react'
import MentorImg from "../../assets/mentor.svg";
import "./mentor-info.css"

const MentorInfo = () => {
  return (
    <>
        <div className='header-btn'>
            Mentor bo'ling
        </div>
        <div className='mentor-page'>
            <div className='mentor-data'>
              <div className='mentor-title'>
                <h3>Bizning jamoamizga qo'shiling – Ilhomlantiruvchi o'quvchilar bugun!</h3> 
              </div>
              <p className='mentor-p'>
                Bizning ishtiyoqli o'qituvchilarimiz jamoasining bir qismi bo'ling va dunyo bo'ylab o'quvchilar bilan o'z tajribangizni baham ko'ring. O'qituvchi sifatida siz qiziqarli kurslarni yaratasiz, talabalarni yo'naltirasiz va ularning shaxsiy va kasbiy muvaffaqiyatlarini shakllantirishga yordam berasiz
              </p>
              <div className="courses-btn mentor-btn">Qo'shilish</div>
            </div>
            <div className='mentor-img'>
                <img src={MentorImg} alt="Mentor img" />
            </div>
        </div>
    </>
  )
}

export default MentorInfo