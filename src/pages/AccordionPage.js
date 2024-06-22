import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "asdf",
      label: "Can react be used for web development?",
      content:
        "Yes, React is a component based architecture fror front-end web development. Yes, React is a component based architecture fror front-end web development",
    },
    {
      id: "sfegf",
      label: "Can react handle page routing?",
      content:
        "React handles page routing seemlessly with the use of page router library. React handles page routing seemlessly with the use of page router library",
    },
    {
      id: "dfgg",
      label: "Can I create a Native app with react?",
      content:
        "with react and react native library you can create apps that works for both andriod and ios. with react and react native library you can create apps that works for both andriod and ios.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
