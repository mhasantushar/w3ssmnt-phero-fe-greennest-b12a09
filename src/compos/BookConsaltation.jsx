import React from "react";
import { toast } from "react-toastify";

const BookConsaltation = () => {
  const handleConsultationReq = (e) => {
    e.preventDefault();
    toast.success("Session booked, please check your mailbox for details");
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleConsultationReq}
      className="font-semibold bg-secondary/40 px-4 py-2 my-8 rounded-xl flex gap-4 items-center justify-center"
    >
      Need a Consultation?
      <input className="input" type="text" placeholder="Your Name" required />
      <input className="input" type="email" placeholder="Your Email" required />
      <button className="btn" type="submit">
        Book Now
      </button>
    </form>
  );
};

export default BookConsaltation;
