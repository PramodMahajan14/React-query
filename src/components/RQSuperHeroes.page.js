import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchsuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export default function RQSuperHeroesPage() {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchsuperheroes,
    {
      cacheTime: 5000,
    }
  );

  if (isLoading) {
    return <h1>Loading data ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1> RQSuperHeroesPage JQ</h1>
      {data?.data.map((e) => {
        return (
          <>
            <h6 key={e.name}>{e.name}</h6>
          </>
        );
      })}
    </>
  );
}
