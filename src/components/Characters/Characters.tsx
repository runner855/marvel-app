import React, { useEffect, useState } from "react";
import "./Characters.css";
import apiCall from "../../api/apiCall";
import { CharactersProps } from "../../types/appTypes";
import { Card } from "antd";

const { Meta } = Card;

export const Characters = () => {
  const [characters, setCharacters] = useState<CharactersProps[] | undefined>();
  const hash = "17c1d99b4abe4172bd185635cfa3e4e6";
  useEffect(() => {
    apiCall
      .get(
        `characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${hash}`,
        {}
      )
      .then((res) => {
        setCharacters(res.data.data.results);
        console.log(characters);
      });
  }, []);
  return (
    <div className="characters">
      {characters &&
        characters.map((item, index) => {
          return (
            <div key={index} className="container">
              <Card
                style={{ width: 300, margin: 20 }}
                cover={
                  <img
                    alt="character_image"
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    style={{ height: 250 }}
                  />
                }
                actions={[<a>Learn More</a>]}
              >
                <Meta title={item.name} description="This is the description" />
              </Card>
            </div>
          );
        })}
    </div>
  );
};
