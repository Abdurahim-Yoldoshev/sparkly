import React from "react";
import "./app.css";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import NewsLetter from "../newsletter/newsletter";
import PeopleInfo from "../people-info/people-info";
import MentorInfo from "../mentor-info/mentor-info";
import Footer from "../footer/footer";

const App = () => {
  return (
    <div className="app">
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="header" id="header">
          <Header />
        </div>
      </div>
      <div className="newsletter" id="about">
        <NewsLetter />
      </div>
      <div className="people-info" id="mentors">
        <PeopleInfo />
      </div>
      <div className="mentor">
        <MentorInfo />
      </div>
      <div className="footer" id="blogs">
        <Footer />
      </div>
    </div>
  );
};

export default App;
