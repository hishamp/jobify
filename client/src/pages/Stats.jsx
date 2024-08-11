/* eslint-disable react-refresh/only-export-components */
import customFetch from "../utils/customFetch";
import { ChartsContainer, StatsContainer } from "../components";
import { useQuery } from "@tanstack/react-query";

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/statss");
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(statsQuery);
  return null;
};

const Stats = () => {
  const { data } = useQuery(statsQuery);

  const { defaultStatus, monthlyApplications } = data;

  return (
    <>
      <StatsContainer defaultStats={defaultStatus} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
