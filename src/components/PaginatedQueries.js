import React, { useState } from "react";
import { useQueries, useQuery } from "react-query";
import axios from "axios";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

export default function PaginatedQueries() {
  const [pageNumber, setpageNumber] = useState(1);
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h1>Loading data ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      PaginatedQueries
      <div>
        {data?.data.map((color) => {
          return (
            <>
              <div key={color.id}>
                <h6>
                  {color.id} {color.label}
                </h6>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setpageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Previous Page
        </button>
        <button
          onClick={() => setpageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next Page
        </button>
      </div>
      {isFetching && "Loading"}
    </div>
  );
}
