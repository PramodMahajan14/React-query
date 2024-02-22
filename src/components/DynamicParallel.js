import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchuperhero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export default function DynamicParallel({ heroIds }) {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchuperhero(id),
      };
    })
  );
  console.log({ queryResult });
  return <div>DynamicParallel</div>;
}
