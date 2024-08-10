import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/StatsContainer";
import customFetch from "../utils/customFetch";
import { redirect, useLoaderData } from "react-router-dom";
import { StatItem } from "../components";
import { FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/admin/app-status");
    return data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatItem
        title={"current users"}
        count={users}
        color={"#e9b949"}
        bcg={"#dcefc7"}
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title={"total jobs"}
        count={jobs}
        color={"#647acb"}
        bcg={"#e0e8f9"}
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};

export default Admin;
