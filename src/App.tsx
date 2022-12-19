import React, { useEffect, useState } from "react";
import "./App.css";
import apiCall from "./api/apiCall";
import axios from "axios";
import { NavBar } from "./components/NavBar/NavBar";
import { LanguageEnum, AppUrls } from "./types/appTypes";
import { Route, Routes } from "react-router-dom";
import { Characters } from "./components/Characters/Characters";
import { Creators } from "./components/Creators/Creators";
import { Events } from "./components/Events/Events";
import { Series } from "./components/Series/Series";
import { Stories } from "./components/Stories/Stories";
import { PageStructure } from "./components/PageStructure/PageStructure";

export const App = () => {
  const [languages, setLanguages] = useState<LanguageEnum>(LanguageEnum.EN);

  return (
    <div className="App">
      <NavBar
        languages={languages}
        setLanguages={(lang: LanguageEnum) => setLanguages(lang)}
      />
      <Routes>
        <Route path={AppUrls.CHARACTERS} element={<Characters />} />
        <Route path="/:page" element={<PageStructure />} />
      </Routes>
    </div>
  );
};
