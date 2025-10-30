import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const PlantDetails = ({ plant }) => {
  const navigate = useNavigate();

  const handleConsultationReq = (e) => {
    e.preventDefault();
    toast.success(
      "Session booked, please check your mailbox for details"
    );
    e.target.reset();
  };

  return (
    <div>
      <div className="flex gap-12">
        <section>
          <figure className="w-120 ">
            <img
              className="rounded-lg object-cover"
              src={plant.image}
              alt={plant.title}
            />
          </figure>
        </section>

        <section>
          <h1 className="text-2xl font-semibold text-primary bg-secondary/40 px-4 py-2 mb-8 rounded-xl">
            {plant.title}
          </h1>

          <p>{plant.description}</p>

          <hr className="border-base-300 my-8" />

          <div className="flex flex-wrap gap-4 justify-around">
            <div className="p-4 bg-secondary/40 rounded-full text-center">
              <p className="font-semibold">Price</p>
              <p>${plant.price}</p>
            </div>
            <div className="p-4 bg-secondary/40 rounded-full text-center">
              <p className="font-semibold">Stock</p>
              <p>{plant.stock} remaining</p>
            </div>
            <div className="p-4 bg-secondary/40 rounded-full text-center">
              <p className="font-semibold">Provider</p>
              <p>{plant.provider}</p>
            </div>
          </div>

          <hr className="border-base-300 my-8" />

          <div className="flex items-center gap-1 text-orange-400 justify-center">
            {Array.from({ length: plant.rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-600">
              {plant.rating} user rating point accumulated
            </span>
          </div>

          <form
            onSubmit={handleConsultationReq}
            className="font-semibold bg-secondary/40 px-4 py-2 my-8 rounded-xl flex gap-4 items-center justify-center"
          >
            Need a Consultation?
            <input
              className="input"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="input"
              type="email"
              placeholder="Your Email"
              required
            />
            <button className="btn" type="submit">
              Book Now
            </button>
          </form>
        </section>
      </div>

      <div className="my-12 flex flex-wrap gap-4 justify-around">
        <Link to={`/category/${plant.categoryId}`}>
          <button className="btn btn-soft btn-secondary">
            Show Plants in this Category
          </button>
        </Link>
        <Link to={"/category/0"}>
          <button className="btn btn-soft btn-secondary">
            Show All Plants
          </button>
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-soft btn-secondary"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PlantDetails;
