import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Nouvels arrivages" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Panneaux solaire"
            price="100.000"
            color="Black"
            badge={true}
            des="Les panneaux solaires captent l'énergie du soleil, fournissant une source d'électricité propre et économique, réduisant votre empreinte carbone et vos factures d'électricité."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Onduleur"
            price="250.000"
            color="Black"
            badge={true}
            des="Un onduleur convertit le courant continu en courant alternatif pour assurer une alimentation stable lors de coupures ou fluctuations de tension."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Pompe electrique"
            price="80.000"
            color="Mixed"
            badge={true}
            des="Une pompe électrique est un appareil motorisé utilisé pour déplacer un liquide d'un endroit à un autre en utilisant l'énergie électrique."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Regulateur de tension"
            price="60.000"
            color="Mixed"
            badge={false}
            des="Un régulateur est un dispositif électronique qui contrôle et stabilise une tension électrique ou un débit de courant afin de maintenir des conditions spécifiques dans un système électrique ou électronique."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Onduleur"
            price="60.000"
            color="Mixed"
            badge={false}
            des="Un onduleur convertit le courant continu en courant alternatif pour assurer une alimentation stable lors de coupures ou fluctuations de tension."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
