import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return null;
      } else {
        return nextIndex;
      }
    });
  };
  const rederedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // CONDITONAL RENDERING USING TENARY EXPRESSION
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleToggle(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{rederedItems}</div>;
}

export default Accordion;
