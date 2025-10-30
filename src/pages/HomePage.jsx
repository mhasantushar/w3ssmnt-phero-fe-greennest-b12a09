import React from "react";
import HeroCarousel from "../compos/HeroCarousel";
import HomeFeatured from "../compos/HomeFeatured";
import BookConsaltation from "../compos/BookConsaltation";

const HomePage = () => {
  return (
    <div>
      <section>
        <HeroCarousel />
      </section>

      <section className="my-18">
        <HomeFeatured />
      </section>

      {/* <section>
        <BookConsaltation/>
      </section> */}
    </div>
  );
};

export default HomePage;
