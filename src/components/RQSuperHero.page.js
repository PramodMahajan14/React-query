import React from "react";
import { useSuperHeroData } from "../Hooks/useSuperHeroData";
import { useParams } from "react-router-dom";
export default function RQSuperHeroPage() {
  const { heroId } = useParams();

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(heroId);

  if (isLoading || isFetching) {
    return <h1>Loading data ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <div>RQSuperHero Details</div>
      <h3>
        {data?.data.name} - {data?.data.alterEgo}
      </h3>
    </div>
  );
}
