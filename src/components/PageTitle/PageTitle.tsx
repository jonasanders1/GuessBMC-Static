import "./pageTitle.css";

interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PageTitle;
