import { FC } from "react";
import { Outlet } from "react-router";

const Home: FC = () => {
  return (
    <>
      <div>Home page</div>
      <Outlet />
    </>
  );
};

export default Home;
