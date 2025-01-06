import { useNavigate } from "react-router-dom";
import CustomButton from "../components/customButton/CustomButton";
import "../styles/notFound.css";
import { navigateAndScroll } from "../utils/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-page page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Finner ikke siden</h2>
        <p>Oops! Siden du leter etter finnes ikke.</p>
        <CustomButton
          text="Ta meg hjem"
          iconPosition="left"
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          onClick={() => navigateAndScroll(navigate, "/")}
          variant="contained"
        />
      </div>
    </div>
  );
};

export default NotFound;
