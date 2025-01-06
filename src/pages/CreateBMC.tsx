import { useState } from "react";
import "../styles/createBMC.css";

import BMCGrid from "../components/BMCGrid/BMCGrid";
import BMCElement from "../components/BMCElement/BMCElement";
import CustomButton from "../components/customButton/CustomButton";

const CreateBMC = () => {
  // Add state for tracking which elements are expanded
  const [expandedElements, setExpandedElements] = useState<string[]>([]);

  // Add state for managing BMC items
  const [bmcItems, setBmcItems] = useState<{ [key: string]: string[] }>({
    key_partners: [],
    key_activities: [],
    key_resources: [],
    value_proposition: [],
    customer_relationships: [],
    channels: [],
    customer_segments: [],
    cost_structure: [],
    revenue_streams: [],
  });

  // Add state for selected category
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [newItemText, setNewItemText] = useState<string>("");

  // Toggle expansion of an element
  const toggleElement = (elementId: string) => {
    setExpandedElements((prev) =>
      prev.includes(elementId)
        ? prev.filter((id) => id !== elementId)
        : [...prev, elementId]
    );
  };

  // Modify handleNewItemSubmit to work with the new input approach
  const handleNewItemSubmit = () => {
    if (selectedCategory && newItemText.trim()) {
      setBmcItems((prev) => ({
        ...prev,
        [selectedCategory]: [...prev[selectedCategory], newItemText.trim()],
      }));
      setNewItemText(""); // Clear input after submit
    }
  };

  // // Remove item from a section
  // const removeItem = (sectionId: string, index: number) => {
  //   setBmcItems((prev) => ({
  //     ...prev,
  //     [sectionId]: prev[sectionId].filter((_, i) => i !== index),
  //   }));
  // };

  // // Update item content
  // const updateItem = (sectionId: string, index: number, value: string) => {
  //   setBmcItems((prev) => ({
  //     ...prev,
  //     [sectionId]: prev[sectionId].map((item, i) =>
  //       i === index ? value : item
  //     ),
  //   }));
  // };

  const bmcElements = [
    { title: "Key Partners", id: "key_partners" },
    { title: "Key Activities", id: "key_activities" },
    { title: "Key Resources", id: "key_resources" },
    { title: "Value Proposition", id: "value_proposition" },
    { title: "Customer Relationships", id: "customer_relationships" },
    { title: "Channels", id: "channels" },
    { title: "Customer Segments", id: "customer_segments" },
    { title: "Cost Structure", id: "cost_structure" },
    { title: "Revenue Streams", id: "revenue_streams" },
  ];

  return (
    <div className="create-bmc-page page">
      <div className="content-wrapper">
        <div className="create-bmc-header">
          <h1>Lag en BMC</h1>
          <p>
            Velg kategori for og legg til elementer. Klikk på elementene for å
            fjerne de igjen.
          </p>
        </div>
        {/* Add new input section */}
        <div className="bmc-input-section">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="">Select a category</option>
            {bmcElements.map((element) => (
              <option key={element.id} value={element.id}>
                {element.title}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder="Add new item"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNewItemSubmit();
              }
            }}
          />

          <CustomButton
            text="Add"
            size="medium"
            flex={false}
            onClick={handleNewItemSubmit}
          />
        </div>

        <div className="create-bmc-container">
          <BMCGrid>
            {bmcElements.map((element) => (
              <BMCElement
                key={element.id}
                title={element.title}
                isExpanded={expandedElements.includes(element.id)}
                onToggle={() => toggleElement(element.id)}
              >
                <ul className="">
                  {bmcItems[element.id].map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </BMCElement>
            ))}
          </BMCGrid>
        </div>
      </div>
    </div>
  );
};

export default CreateBMC;
