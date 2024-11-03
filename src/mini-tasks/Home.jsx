import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    {
      name: "Accordion",
      path: "/accordion",
    },
    {
      name: "Background changer",
      path: "/background-changer",
    },
    {
      name: "Chip Input",
      path: "/chip-input",
    },
    {
      name: "Clock",
      path: "/clock",
    },
    {
      name: "File drag and drop",
      path: "/drag-and-drop",
    },
    {
      name: "Drop down",
      path: "/dropdown",
    },
    {
      name: "Image Gallery",
      path: "/image-gallery",
    },
    {
      name: "Multi-step form",
      path: "/multi-step-form",
    },
    {
      name: "Pagination",
      path: "/pagination",
    },
    {
      name: "Quiz",
      path: "/quiz",
    },
    {
      name: "Shopping list",
      path: "/shopping-list",
    },
    {
      name: "Stepper",
      path: "/stepper",
    },
    {
      name: "String transform",
      path: "/string-transform",
    },
    {
      name: "Tabs",
      path: "/tab",
    },
    {
      name: "Table color",
      path: "/table-color",
    },
    {
      name: "Traffic Lights",
      path: "/traffic-lights",
    },
  ];
  return (
    <div>
      <div className="w-full px-10 mt-7">
        <h1 className="text-2xl font-bold">React Mini Tasks</h1>
        <div className="mt-5 flex flex-col gap-1 text-blue-600 text-lg font-bold">
          {links.map((link, index) => (
            <Link key={link.name} to={`${link.path}`}>
              {index + 1}. {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
