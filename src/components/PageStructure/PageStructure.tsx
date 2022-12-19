import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiCall from "../../api/apiCall";
import "../PageStructure/PageStructure.css";

export const PageStructure = () => {
  const params = useParams();
  console.log(params);
  const hash = "17c1d99b4abe4172bd185635cfa3e4e6";

  useEffect(() => {
    params.page &&
      apiCall
        .get(
          `characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`,
          {}
        )
        .then((res) => {
          console.log(res);
        });
  }, [params.page]);
  return <div className="page_structure">stucture</div>;
};
