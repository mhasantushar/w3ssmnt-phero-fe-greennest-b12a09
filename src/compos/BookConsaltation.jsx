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

      <select
        className="select text-accent/75"
        defaultValue="Select a consultant"
        required
      >
        <option disabled={true}>Select a consultant</option>
        <option>Alice Green, General Indoor Plant Care</option>
        <option>Amelia Leaf, Air-Purifying Plants</option>
        <option>Chloe Ivy, Pest Control</option>
        <option>Daniel Moss, Humidity and Air Quality</option>
        <option>Ella Fern, Tropical Plants</option>
        <option>Isabella Petunia, Flowering Plants</option>
        <option>John Root, Soil and Fertilization</option>
        <option>Liam Petal, Plant Propagation</option>
        <option>Mike Evergreen, Plant Disease Prevention</option>
        <option>Noah Cedar, Low-Light Plants</option>
        <option>Oliver Vine, Plant Nutrition</option>
        <option>Sophia Bloom, Succulents and Cacti</option>
      </select>
      <button className="btn" type="submit">
        Book Now
      </button>
    </form>
  );
};

export default BookConsaltation;
