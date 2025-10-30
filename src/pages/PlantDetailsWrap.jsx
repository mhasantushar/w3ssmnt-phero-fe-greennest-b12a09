import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import RootHeader from "../compos/RootHeader";
import RootFooter from "../compos/RootFooter";
import PlantDetailsInfo from "../compos/PlantDetailsInfo";

const PlantDetailsWrap = () => {
  const [selectedPlant, setSelectedPlant] = useState({});
  const { plantId } = useParams();
  // console.log(plantId);

  const allPlantsData = useLoaderData();
  // console.log(allPlantsData);

  useEffect(() => {
    const plantDetails = allPlantsData.find(
      (plant) => plant.plantId == plantId
    );
    setSelectedPlant(plantDetails);
  }, [allPlantsData, plantId]);
  console.log(selectedPlant);

  return (
    <div>
      <header className="w-11/12 mx-auto ">
        <RootHeader />
      </header>

      <main className="min-h-[calc(100dvh-381px)] my-12 w-11/12 mx-auto">
        <PlantDetailsInfo plant={selectedPlant}/>
      </main>

      <footer >
        <RootFooter />
      </footer>
    </div>
  );
};

export default PlantDetailsWrap;
