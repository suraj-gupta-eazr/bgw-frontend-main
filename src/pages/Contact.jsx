import React from "react";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-[#fff] pt-10">
      <ContactForm/>
      <Analytics />
      <Footer />
    </div>
  );
};

export default Contact;
