import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  // const location = useLocation();
  // const [prevLocation, setPrevLocation] = useState("");
  // useEffect(() => {
  //   setPrevLocation(location.state.data);
  // }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      {/* <Breadcrumbs title="About" prevLocation={prevLocation} /> */}
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">New Tech Services</span>{" "}
          New Tech Services est une entreprise qui fait dans l'energie solaire plus precisement dans l'energie solire,
          Lampadaires solaires, Electricite generale, Video surveillance, Telecommunication
          ,Fabrication metallique, Forage et adduction d'eau potable
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continuer vos achats
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;