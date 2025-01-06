import CustomButton from "../components/customButton/CustomButton";
import "../styles/landing.css";
import heroImage from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGamepad } from "@fortawesome/free-solid-svg-icons";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page page">
      
      {/* Hero Section */}
      <section className="hero full-width-section">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">
              Hei! Velkommen til spillet
              <br /> <span>Guess BMC</span>
            </h1>
            <p>Et spill der du skal gjette selskap basert en gitt BMC.</p>
            <CustomButton
              text="Spill nå"
              onClick={() => navigate("/game")}
              flex={false}
              icon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features full-width-section">
        <div className="features-inner">
          <h2 className="section-title">Hvordan spille</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h3>Se BMC</h3>
              <p>Studer forretningsmodellen som vises</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h3>Gjett selskapet</h3>
              <p>Skriv inn navnet på selskapet du tror det er</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h3>Få poeng</h3>
              <p>Samle poeng for riktige svar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="leaderboard-preview full-width-section">
        <div className="leaderboard-inner">
          <h2 className="section-title">Toppliste</h2>
          <div className="leaderboard-content">
            <div className="leaderboard-table">
              <div className="leaderboard-header">
                <span>Rank</span>
                <span>Spiller</span>
                <span>Poeng</span>
              </div>
              {/* We could fetch real data here, but for landing page maybe show static example */}
              {[1, 2, 3].map((rank) => (
                <div key={rank} className="leaderboard-row">
                  <span className="rank">#{rank}</span>
                  <span className="player">Spiller {rank}</span>
                  <span className="score">{1000 - (rank * 50)}</span>
                </div>
              ))}
            </div>
            <div className="leaderboard-cta">
              <p>Vil du være med på topplisten?</p>
              <CustomButton
                text="Guess BMC"
                onClick={() => navigate("/game")}
                flex={false}
                icon={<FontAwesomeIcon icon={faGamepad} />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
