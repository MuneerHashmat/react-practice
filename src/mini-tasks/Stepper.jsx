import { useState } from "react";

const Stepper = () => {
  const stepperItems = [
    {
      task: "Contact Details",
      desc: "Add contact details for further communications.",
    },
    {
      task: "Shipping Address",
      desc: "Add shipping address for successfull delivery.",
    },
    { task: "Payment", desc: "Complete Payment to complete the order." },
    { task: "Delivered", desc: "Ready to get delivered!" },
  ];
  const [activeTask, setActiveTask] = useState(1);
  const width = ((activeTask - 1) / (stepperItems.length - 1)) * 100;
  return (
    <div className="mt-10 w-[80vw] mx-auto">
      <h1 className="text-center mb-5 ">Stepper Component</h1>
      <div className="w-full flex justify-between items-center relative overflow-hidden">
        {stepperItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-2 z-10 relative"
          >
            <div
              className={`px-2 bg-gray-300 rounded-full ${
                activeTask <= index + 1
                  ? activeTask == index + 1
                    ? "bg-blue-500"
                    : "bg-gray-300"
                  : "bg-green-400"
              }`}
            >
              {activeTask <= index + 1 ? <p>{index + 1}</p> : <p>✔️</p>}
            </div>
            <p className="absolute top-7 w-[125px]">
              {stepperItems[index].task}
            </p>
          </div>
        ))}
        <div className="w-full h-[5px] bg-gray-300 absolute top-[35%]">
          <div
            className={`h-full bg-green-500`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <div>
          {activeTask > stepperItems.length ? (
            <p>Order Delivered successfully!</p>
          ) : (
            <p>{stepperItems[activeTask - 1].desc}</p>
          )}
        </div>

        <div>
          {activeTask <= stepperItems.length && (
            <button
              onClick={() => setActiveTask((prev) => prev + 1)}
              className="bg-gray-300 px-3 py-1 rounded-md mt-4"
            >
              {activeTask == stepperItems.length ? "Finish" : "Next"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
