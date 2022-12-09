import { FC } from "react";
import { Navigate, Outlet } from "react-router";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from "react-router-dom";

const Home: FC = () => {
  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <div>
        <Top>
          <span className="iconfont menu">&#xe65c;</span>
          <span className="title">星音乐</span>
          <span className="iconfont search">&#xe62b;</span>
        </Top>
        <Tab>
          <NavLink to="recommend">
            <TabItem>
              <span>推荐</span>
            </TabItem>
          </NavLink>
          <NavLink to="singers">
            <TabItem>
              <span>歌手</span>
            </TabItem>
          </NavLink>
          <NavLink to="rank">
            <TabItem>
              <span>排行榜</span>
            </TabItem>
          </NavLink>
        </Tab>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
