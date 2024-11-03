import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Add, Remove } from "@mui/icons-material";

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
  }, [currentOpenId, allowMultiple]);
  return (
    <div className="bg-gray-200 w-full px-3 py-2 border border-black">
      <div className="flex gap-3 justify-between py-2 font-bold text-xl">
        <p>{faq.question}</p>
        {!show ? (
          <button
            onClick={() => {
              setShow(true);
              setCurrentOpenId(faq.sno);
            }}
            className=" text-xl px-2 rounded-full"
          >
            <Add />
          </button>
        ) : (
          <button
            className=" text-xl px-3 rounded-full"
            onClick={() => setShow(false)}
          >
            <Remove />
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
