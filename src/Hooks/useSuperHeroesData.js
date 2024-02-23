import {
  useQuery,
  useMutation,
  useQueryClient,
  setQueryData,
} from "react-query";
import axios from "axios";

const fetchuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const AddSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchuperheroes, {
    // cacheTime:5000,
    // staleTime:60000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: "always",
    // refetchInterval: 2000,       //-----RQ will fetching data every 2 second if component is mounted
    // refetchIntervalInBackground: true,  //-----RQ will fetching data every interval of time
    // enabled: false,     //----- data will be fetch only fetch when refetch event or button click

    onSuccess: onSuccess,
    onError: onError,

    // select: (data) => {
    //   const heroName = data.data.map((e) => e.name);
    //   return heroName;
    // },
  });
};

export const AddSuperHeroData = (onSuccess, onError) => {
  const queryClient = useQueryClient();
  return useMutation(AddSuperHero, {
    // autoDisplay - list after added
    onSuccess: (data) => {
      /** Query Invalidation Start */
      // queryClient.invalidateQueries('super-heroes')
      /** Query Invalidation End */

      /** Handling Mutation Response Start */
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
      /** Handling Mutation Response Start */
    },
  });
};
