import { useEffect, useState, useRef } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  //WATCHING FOR CLICK EVENTS
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.id}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });
  // let content = "Select...";
  // if (selection) {
  //   content = selection.label;
  // }
  let icon = (
    <span className="text-x2">
      {isOpen ? <FaCaretDown /> : <FaCaretRight />}
    </span>
  );
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select your size..."} {icon}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
