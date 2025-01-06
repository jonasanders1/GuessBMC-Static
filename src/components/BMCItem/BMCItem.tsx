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
    <ul>
      {bmcData.bmc[element.id].map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BMCItem;
