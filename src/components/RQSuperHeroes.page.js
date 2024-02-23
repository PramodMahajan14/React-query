import React, { useState } from "react";

import {
  AddSuperHeroData,
  useSuperHeroesData,
} from "../Hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export default function RQSuperHeroesPage() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // Mutation

  const {
    mutate: addHero,
    isError: adderror,
    isFetching: addfeching,
  } = AddSuperHeroData();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero);
    setAlterEgo("");
    setName("");
  };

  if (isLoading) {
    return <h1>Loading data ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1> RQSuperHeroesPage JQ</h1>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>

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
