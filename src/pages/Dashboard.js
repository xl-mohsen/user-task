import { useEffect } from "react";
import { Clock, Navbar } from "../components";
import { useGlobalContext } from "../context/context";

export default function Dashboard() {
  const { getUserData } = useGlobalContext();

  useEffect(() => {
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);

  return (
    <>
      <Navbar />
      <Clock />
    </>
  );
}
