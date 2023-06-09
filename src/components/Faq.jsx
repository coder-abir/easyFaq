import React, { useState } from "react";

const Faq = ({ id, answer, question }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="text-white w-1/2 mx-auto p-5 rounded">
        <div
          className="flex gap-5 text-2xl bg-slate-500 p-3 items-center cursor-pointer justify-between"
          onClick={() => setToggle(!toggle)}
        >
          <h1>{question}</h1>
          <button
            onClick={() => setToggle(!toggle)}
            className=""
          >
            {toggle ? "-" : "+"}
          </button>
        </div>
        {toggle && <p className=" bg-slate-800 p-3 ">{answer}</p>}
      </div>
    </div>
  );
};

export default Faq;
