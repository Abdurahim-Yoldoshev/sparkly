import React from "react";
import "./people-info.css";
import PeopleImg from "../../assets/peoples/people.png";
import PeopleImg2 from "../../assets/peoples/people2.png";
import PeopleImg3 from "../../assets/peoples/people3.png";
import PeopleImg4 from "../../assets/peoples/people4.png";
import PeopleImg5 from "../../assets/peoples/people5.png";
import PeopleImg6 from "../../assets/peoples/people6.png";
import PeopleImg7 from "../../assets/peoples/people7.png";
import PeopleImg8 from "../../assets/peoples/people8.png";

class Card extends React.Component {
  render() {
    const { name, job, image, time, follow } = this.props;
    return (
      <div className="flex people-card border shadow-sm">
        <div>
          <img src={image} alt={name} className="card-img" />
        </div>
        <div className="card-text">
          <p className="name">{name}</p>
          <p className="job">{job}</p>
          <div className="card-status">
            <div>
              <p className="status-text">{`${time}M+`}</p>
              <label><i className="fa-regular fa-clock"></i> Vaqt</label>
            </div>
            <div>
              <p className="status-text">{`${follow}K+`}</p>
              <label><i className="fa-solid fa-people-line"></i> Obuna</label>
            </div>
          </div>
          <div className="weive-link">
            <a href="./">Profil
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class PeopleInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  render() {
    const teamMembers = [
      {
        id: 1,
        name: "Eshmatov Toshmat",
        job: "Dasturchi",
        image: PeopleImg,
        time: "10",
        follow: "50",
      },
      {
        id: 2,
        name: "Otabek Nazarov",
        job: "Dizayner",
        image: PeopleImg2,
        time: "8",
        follow: "25",
      },
      {
        id: 3,
        name: "Aliyev Vali",
        job: "Menejer",
        image: PeopleImg3,
        time: "12",
        follow: "40",
      },
      {
        id: 4,
        name: "Elbek Karimov",
        job: "SMM Mutaxassisi",
        image: PeopleImg4,
        time: "6",
        follow: "35",
      },
      {
        id: 5,
        name: "Jasur Rahimov",
        job: "Backend Dasturchi",
        image: PeopleImg5,
        time: "15",
        follow: "70",
      },
      {
        id: 6,
        name: "Diyor Umarov",
        job: "QA Muhandisi",
        image: PeopleImg6,
        time: "5",
        follow: "18",
      },
      {
        id: 7,
        name: "Sardor Azimov",
        job: "DevOps Muhandisi",
        image: PeopleImg7,
        time: "9",
        follow: "22",
      },
      {
        id: 8,
        name: "Rustam Aliyev",
        job: "Kopirayter",
        image: PeopleImg8,
        time: "7",
        follow: "30",
      },
    ];

    const displayedMembers = this.state.showAll ? teamMembers : teamMembers.slice(0, 2);

    return (
      <>
        <div>
          <div className="title margin-auto">Jamoamiz</div>
          <div className="info-titles">
            <span>Sanoat mutaxassislaridan bilib oling</span>
            <div>
              Sanoat mutaxassislarining ma'lumotlari va martaba o'sishi va
              kasbiy rivojlanish uchun haqiqiy ko'nikmalarni o'z ichiga oladi
            </div>
          </div>
        </div>

        <div className="team-container overflow-auto">
          {displayedMembers.map((member) => (
            <Card
              key={member.id}
              name={member.name}
              job={member.job}
              image={member.image}
              time={member.time}
              follow={member.follow}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
          className="btn btn-primary rounded-pill"
            onClick={() => this.setState({ showAll: !this.state.showAll })}
            style={{ padding: "10px 20px", cursor: "pointer", background: "var(--color-primary)", border: "none"}
          }
          >
            {this.state.showAll ? "Yashirish" : "Ko'rish"}
          </button>
        </div>
      </>
    );
  }
}

export default PeopleInfo;