// public routes

import { Community } from "components/community/Community";
import { Details } from "components/Details";
import { Home } from "components/home/Home";
import { NewsFeed } from "components/newsfeed/NewsFeed";
<Details/>

//private routes
 
export const publicRoutes = [
  {
    key: "home",
    path: "/",
    component: Home,
    exact: true,
  },



  {
    key: "community",
    path: "/community",
    component: Community,
    exact: true,
  },


  {
    key: "newsfeed",
    path: "/newsfeed",
    component: NewsFeed,
    exact: true,
  },


  {
    key: "detailcoin",
    path: "/coindetails/:ID",
    component: Details,
    exact: true,
  },




];

export const privateRoutes = [];
