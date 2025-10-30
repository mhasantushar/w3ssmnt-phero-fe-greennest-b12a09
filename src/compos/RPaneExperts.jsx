import React, { use } from "react";

const plantExpertsPromise = fetch("../plants-experts.json").then((resp) =>
  resp.json()
);

const RPaneExperts = () => {
  const plantExperts = use(plantExpertsPromise);

  // Shuffle the array and get the first 3 random experts
  const shuffledExperts = [...plantExperts].sort(() => Math.random() - 0.5);
  const randomExperts = shuffledExperts.slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary bg-secondary/40 mt-8 mb-4 px-4 py-2 rounded-xl shadow-lg text-center">
        Experts
      </h2>

      <section className="flex flex-col gap-4 rounded-lg py-2">
        {randomExperts.map((expert) => (
          <div key={expert.expertId} className="bg-secondary/20 shadow-lg rounded-lg">
            <img
              className="object-cover rounded-t-lg"
              src={expert.photo}
              alt={expert.name}
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{expert.name}</h3>
              <p>{expert.specialty}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RPaneExperts;
