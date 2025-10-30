import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const HomePlantCard = ({ plant }) => {
  const { plantId, image, title, price, rating, stock } = plant;

  return (
    <div className="card card-side bg-base-200 shadow-lg">
      <figure>
        <img className="w-50 object-cover" src={image} alt={title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating}</span>
        </div>
        <hr className="border-base-300 mb-6"/>
        
        <div>
          <p>Price: ${price}</p>
          <p>Only {stock} in stock!</p>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/plant/${plantId}`}><button className="btn btn-secondary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomePlantCard;
