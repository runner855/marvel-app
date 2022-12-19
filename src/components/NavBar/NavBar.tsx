import React from "react";
import "../NavBar/NavBar.css";
import { NavBarArray } from "../../Utilities/utility";
import { Link } from "react-router-dom";
import { LanguageEnum } from "../../types/appTypes";

export type NavBarProps = {
  languages: LanguageEnum;
  setLanguages: (languages: LanguageEnum) => void;
};

export const NavBar = ({ languages }: NavBarProps) => {
  return (
    <div className="navbar_container">
      {NavBarArray.map((item, index) => {
        return (
          <nav key={index}>
            <ul>
              <li>
                <Link to={item.to}>{item.navbar_element[languages]}</Link>
              </li>
            </ul>
          </nav>
        );
      })}
    </div>
  );
};
