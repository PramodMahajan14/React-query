import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchuperhero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-heroe", heroId], () => fetchuperhero(heroId));
};
