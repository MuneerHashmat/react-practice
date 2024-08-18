import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({
  faq,
  currentOpenId,
  allowMultiple,
  setCurrentOpenId,
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!allowMultiple) {
      if (currentOpenId != faq.sno) {
        setShow(false);
      }
    }
  }, [currentOpenId]);
  return (
    <div className="bg-gray-200 w-full px-3 py-1 rounded-md">
      <div className="flex gap-3 justify-between py-2 font-bold text-xl">
        <p>{faq.question}</p>
        {!show ? (
          <button
            onClick={() => {
              setShow(true);
              setCurrentOpenId(faq.sno);
            }}
            className="bg-red-400 text-xl px-2 rounded-full"
          >
            +
          </button>
        ) : (
          <button
            className="bg-red-400 text-xl px-3 rounded-full"
            onClick={() => setShow(false)}
          >
            -
          </button>
        )}
      </div>

      {show && <div className="mt-2">{faq.answer}</div>}
    </div>
  );
};

AccordionItem.propTypes = {
  faq: PropTypes.object,
  currentOpenId: PropTypes.number,
  allowMultiple: PropTypes.bool,
  setCurrentOpenId: PropTypes.func,
};
export default AccordionItem;
