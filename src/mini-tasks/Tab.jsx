import { useState } from "react";

const Tab = () => {
  const tabData = [
    {
      id: 1,
      content:
        "HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more.",
    },
    {
      id: 2,
      content:
        "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
    },
    {
      id: 3,
      content:
        "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const currentContent = tabData.find((item) => item.id === activeTab).content;

  console.log(tabData);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 w-[50vw]">
        <div className="w-full flex">
          {tabData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-2 border border-black cursor-pointer ${
                item.id === activeTab ? "bg-blue-400" : "bg-green-400"
              }`}
            >
              <p>Tab {item.id}</p>
            </div>
          ))}
        </div>

        <div>
          <p>{currentContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
