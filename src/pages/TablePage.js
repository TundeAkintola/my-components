import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 1 },
    { name: "Banana", color: "bg-yellow-300", score: 4 },
    { name: "Lime", color: "bg-green-500", score: 5 },
    { name: "Cucumber", color: "bg-green-700", score: 7 },
  ];

  // Making the HEADERS AND CELLS reusable
  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-5 m-3 ${fruit.color}`} />,
    },

    { label: "Score", render: (fruit) => fruit.score },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
