import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const allPlantsPromise = fetch("../plants-details.json").then((resp) =>
  resp.json()
);

const getRandomPlant = (data) => {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  return shuffled[0]; // Return only one random plant
};

const HomeFeatured = () => {
  const [randomPlant, setRandomPlant] = useState(null);

  useEffect(() => {
    allPlantsPromise.then((allPlantsData) => {
      const selectedPlant = getRandomPlant(allPlantsData);
      setRandomPlant(selectedPlant);
    });
  }, []);

  if (!randomPlant) {
    return <div>Loading...</div>; // Show loading until the plant is selected
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary bg-secondary/40 px-4 py-2 mb-8 rounded-xl text-center">
        Did you know this plant?
      </h2>

      <div>
        <section className="flex justify-center">
          <figure className="w-120">
            <img
              className="rounded-lg object-cover "
              src={randomPlant.image}
              alt="Know this plant?"
            />
          </figure>
        </section>

        <div className="flex items-center gap-1 text-orange-400 justify-center mt-4">
          {Array.from({ length: randomPlant.rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600 font-semibold">{randomPlant.rating}</span>
        </div>
      </div>

      <div className="my-12 flex flex-wrap gap-4 justify-around">
        <Link to={`/category/${randomPlant.categoryId}`}>
          <button className="btn btn-soft btn-secondary">
            Show Plants in this Category
          </button>
        </Link>

        <Link to={"/category/0"}>
          <button className="btn btn-soft btn-secondary">
            Show All Plants
          </button>
        </Link>

        <Link to={`/plant/${randomPlant.plantId}`}>
          <button className="btn btn-soft btn-secondary">
            Learn More on this Plant
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeFeatured;
