import "./bmcItem.css";

interface BMCElement {
  id: string;
}

interface BMC {
  bmc: {
    [key: string]: string[];
  };
}

interface BMCItemProps {
  bmcData: BMC;
  element: BMCElement;
}

const BMCItem = ({ bmcData, element }: BMCItemProps) => {
  return (
    <ul className="bmc-items-list">
      {bmcData.bmc[element.id].map((item: string, index: number) => (
        <li key={index} className="bmc-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BMCItem;
