import { useState } from "react";
import Dropdown from "../components/Dropdown";
function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { id: "ertr", label: "Small", value: "small" },
    { id: "hdhr", label: "Medium", value: "medium" },
    { id: "efghs", label: "Large", value: "Large" },
  ];
  return (
    <div className="flex">
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropdownPage;
