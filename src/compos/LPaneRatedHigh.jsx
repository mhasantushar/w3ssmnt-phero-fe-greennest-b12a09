import React, { use } from "react";
import { FaStar } from "react-icons/fa6";
import { ImPlay3 } from "react-icons/im";
import { Link } from "react-router";

const allPlantsPromise = fetch("../plants-details.json").then((resp) =>
  resp.json()
);

const LPaneRatedHigh = () => {
  const allPlantsData = use(allPlantsPromise);
  // console.log(allPlantsData);

  const popularPlants = allPlantsData
    .sort((a, b) => b.rating - a.rating) // Sort in descending order based on 'rating'
    .slice(0, 4);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary bg-secondary/40 mt-8 mb-4 mr-4 px-4 py-2 rounded-xl shadow-lg text-center">
        Popular
      </h2>

      <section className="mr-4 flex flex-col gap-4 cursor-pointer">
        {popularPlants.map((plant) => (
          <Link to={`/plant/${plant.plantId}`}>
            <div className="text-center">
              <img
                className="rounded-md shadow-lg mb-2"
                src={plant.image}
                alt={plant.title}
              />
              <h3>{plant.title}</h3>
              <div className="flex items-center gap-1 text-orange-400 justify-center">
                {Array.from({ length: plant.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-2 text-gray-600 font-semibold">
                  {plant.rating}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default LPaneRatedHigh;
