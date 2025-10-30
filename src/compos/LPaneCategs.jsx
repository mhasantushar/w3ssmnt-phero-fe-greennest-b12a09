import React, { use } from "react";
import { NavLink } from "react-router";
import "../index.css";

const plantCategPromise = fetch("../plants-categ.json").then((resp) =>
  resp.json()
);

const LPaneCategs = () => {
  const plantCategories = use(plantCategPromise);
  // console.log(plantCategories);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary bg-secondary/40 mb-4 mr-4 px-4 py-2 rounded-xl shadow-lg text-center">
        Categories
      </h2>

      <section className="flex flex-col gap-2 mr-4 bg-secondary/20 rounded-lg py-2 shadow-lg">
        {plantCategories.map((categ) => (
          <NavLink
            to={`/category/${categ.categId}`}
            key={categ.categId}
            className={"btn btn-ghost home-categ-list mx-2"}
          >
            {categ.categName}
          </NavLink>
        ))}
      </section>
    </div>
  );
};

export default LPaneCategs;
