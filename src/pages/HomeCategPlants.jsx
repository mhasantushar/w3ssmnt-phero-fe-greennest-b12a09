import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import HomePlantCard from "../compos/HomePlantCard";

const HomeCategPage = () => {
  const [categoryPlants, setCategoryPlants] = useState([]);
  const {categId} = useParams();
  // console.log(categId);

  const plantsData = useLoaderData();
  // console.log(plantsData);

  useEffect(() => {
    if (categId == 0) {
      setCategoryPlants(plantsData);
      return;
    }

    const filteredPlantData = plantsData.filter(
      (plant) => plant.categoryId == categId
    );
    setCategoryPlants(filteredPlantData);
  }, [categId, plantsData]);
  // console.log(categoryPlants);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary bg-secondary/20 mb-2 px-4 py-2 rounded-xl">
        Total <span className="font-bold text-secondary">{categoryPlants.length}</span> Plants Found
      </h2>

      <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {
          categoryPlants.map(plant => <HomePlantCard key={plant.plantId} plant={plant} />)
        }
      </section>
    </div>
  );
};

export default HomeCategPage;
