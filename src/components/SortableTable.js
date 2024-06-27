import Table from "./Table";
import { GoArrowDown, GoArrowSwitch, GoArrowUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <GoArrowSwitch />;
  }
  if (sortOrder === null) {
    return;
  } else if (sortOrder === "asc") {
    return <GoArrowUp />;
  } else if (sortOrder === "desc") {
    return <GoArrowDown />;
  }
}
export default SortableTable;
