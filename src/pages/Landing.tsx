import CustomButton from "../components/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1 className="landing-title">Velkommen til Guess BMC</h1>
      <div className="landing-content">
        <div className="hero-section">
          <h2 className="hero-title">Prøv deg på den ultimate BMC-quizen</h2>
          <p className="hero-description">
            Guess the BMC (Business Model Canvas) er et spill der du skal gjette
            riktig selskap basert på en gitt BMC. Basert på hvor mange ganger du
            gjetter riktig, får du poeng. Riktig gjett gir 100 poeng, feil gir 0
            poeng. Ta en titt på ledertavlen for å se hvem som er best!
          </p>
          <div className="cta-buttons">
            <CustomButton
              text="Spill Guess BMC"
              onClick={() => navigate("/game")}
            />
            <CustomButton
              text="Lag en bruker"
              onClick={() => navigate("/register")}
            />
          </div>
        </div>

        <div className="rules-section">
          <h3>Regler</h3>
          <ul className="rules-list">
            <li>Riktig gjett gir 100 poeng</li>
            <li>Feil gjett gir 0 poeng.</li>
            <li>
              Gjett riktig BMC første gang du spiller, og du får 1000 poeng.
            </li>
            <li>
              Din score er basert på hvor mange ganger du gjetter riktig og hvor
              lang tid du bruker.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
