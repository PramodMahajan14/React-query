import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUsrByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCouresByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export default function DependentQueries({ email }) {
  const { data: user } = useQuery(["users", email], () =>
    fetchUsrByEmail(email)
  );

  const channelId = user?.data.channelId;

  useQuery(["coures", channelId], () => fetchCouresByChannelId(channelId), {
    enabled: !!channelId,
  });
  return <div>DependentQueries</div>;
}
