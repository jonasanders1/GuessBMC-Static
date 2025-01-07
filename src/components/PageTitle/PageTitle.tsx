import { useNavigate } from "react-router-dom";
import "./pageTitle.css";
import CustomButton from "../customButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface PageTitleProps {
  title: string;
  description: string;
  showNavigation?: boolean;
}

const PageTitle = ({
  title,
  description,
  showNavigation = true,
}: PageTitleProps) => {
  const navigate = useNavigate();

  return (
    <div className="page-title">
      {showNavigation && (
        <div className="mobile-nav">
          <CustomButton
            text="Hjem"
            variant="text"
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
            iconPosition="left"
            size="large"
            buttonColor="var(--primary-color)"
            flex={false}
            onClick={() => navigate("/")}
          />
        </div>
      )}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PageTitle;
