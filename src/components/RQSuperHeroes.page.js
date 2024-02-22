import React, { useState } from "react";

import { useSuperHeroesData } from "../Hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export default function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h1>Loading data ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1> RQSuperHeroesPage JQ</h1>
      <button onClick={refetch}>Fetch data</button>
      {data?.data.map((e) => {
        return (
          <>
            <div key={e.id}>
              <Link to={`/rq-super-heroes/${e.id}`}>{e.name}</Link>
            </div>
          </>
        );
      })}
    </>
  );
}
