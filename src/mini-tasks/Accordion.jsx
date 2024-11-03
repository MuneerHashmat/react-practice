import { useState } from "react";
import { travelFAQs } from "../data1";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [allowMultiple, setAllowMultiple] = useState(true);
  const [currentOpenId, setCurrentOpenId] = useState(0);

  return (
    <>
      <div className="w-[80vw] my-10 flex flex-col gap-4 mx-auto">
        {travelFAQs.map((faq) => (
          <AccordionItem
            key={faq.sno}
            faq={faq}
            currentOpenId={currentOpenId}
            allowMultiple={allowMultiple}
            setCurrentOpenId={setCurrentOpenId}
          />
        ))}
      </div>

      <div className="mx-auto flex justify-center gap-4">
        <input
          type="checkbox"
          checked={allowMultiple}
          onChange={() => setAllowMultiple(!allowMultiple)}
          className="w-6 h-6"
        />
        <label className="text-lg">Allow Multiple Open Accordions</label>
      </div>
    </>
  );
};

export default Accordion;
