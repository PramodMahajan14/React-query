import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
export default function ParallelQueries() {
  const { data: superoheroes } = useQuery("super-heros", fetchSuperheroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>ParallelQueries</div>;
}
