import React from "react";
import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      {title !== null && ( // Vérifiez si title n'est pas null avant de l'afficher
        <>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
          {icons && <BiCaretDown />}
        </>
      )}
    </div>
  );
};

export default NavTitle;
