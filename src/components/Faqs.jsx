import React, { useState } from "react";
import { faqData } from "./data";
import Faq from "./Faq";
const Faqs = () => {
  const [faqs, setFaqs] = useState(faqData);

  return (
    <div className="h-screen">
      <h1 className="text-4xl uppercase text-white font-bold text-center mt-5 mb-5 tracking-widest">Faqs</h1>
      {faqs.map((faq) => (
        <Faq key={faq.id} {...faq}/>
      ))}
    </div>
  );
};

export default Faqs;
