import React, { useState } from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageNumber = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};
export default function InfiniteQueries() {
  const [pageNumber, setpageNumber] = useState(1);
  const { isLoading, data, isError, error, isFetching } = useInfiniteQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber)
  );

  if (isLoading) {
    return <h1>Loading data ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h1>infiniteQueriesFetching</h1>
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
      {/* <div>
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
      {isFetching && "Loading"} */}
    </div>
  );
}
