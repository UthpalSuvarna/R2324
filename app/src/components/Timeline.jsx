import { Chrono } from "react-chrono";
// https://www.npmjs.com/package/react-chrono
export default function Timeline() {
  const items = [
    {
      title: "1999",
      cardTitle: "GNU",
    },
    {
      title: "2000",
      cardTitle: "Linux",
    },
  ];
  return (
    <div>
      <h1 className="text-5xl text-center">History of Foss</h1>
      <div className="p-10 my-20  flex justify-around">
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  );
}
