import React, { useState, useEffect } from "react";

const plantCaringPromise = fetch("../plants-caring.json").then((resp) =>
  resp.json()
);

const getRandomTips = (data, numberOfTips) => {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numberOfTips);
};

const RPaneCaring = () => {
  const [randomTips, setRandomTips] = useState([]);

  useEffect(() => {
    plantCaringPromise.then((plantCaringData) => {
      const selectedTips = getRandomTips(plantCaringData, 3);
      setRandomTips(selectedTips);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary bg-secondary/40 mb-2 px-4 py-2 rounded-xl shadow-lg text-center">
        Caring
      </h2>

      <section className="flex flex-col gap-4 py-2">
        {randomTips.map((elem, index) => (
          <div key={index} className=" rounded-b-2xl shadow-lg">
            <p className="px-4 py-2 bg-base-200 text-center">{elem.tipDesc}</p>
            <h3 className="bg-secondary/20 px-4 py-2 rounded-b-2xl text-center">
              {elem.tipCateg}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RPaneCaring;
