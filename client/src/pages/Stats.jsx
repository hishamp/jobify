/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { ChartsContainer, StatsContainer } from "../components";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs/stats");
    return data;
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Stats = () => {
  const { defaultStatus, monthlyApplications } = useLoaderData();

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
