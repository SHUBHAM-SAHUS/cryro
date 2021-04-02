import React, { useState } from "react";
// ui component for page layout
import {Header} from "./components/shared/header";
import Sidebar from "./components/shared/sidebar";

import "./App.scss";
import { Banner } from "components/shared/header/components/Banner/Banner";
import { Bannertop } from "components/shared/header/components/bannertop/Bannertop";
import { NavMenu } from "components/shared/header/components/navbar/NavMenu";


const App = ({ children }) => {
  const {history} = children.props;

  // const [sidebarToggled] = useState(false);
  const [ resSidebarToggled, setResSidebarToggle] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light-theme");

  const changeTheme = () => {
    const theme = currentTheme === "dark-theme" ? "light-theme" : "dark-theme";
    if (theme !== currentTheme) setCurrentTheme(theme);
  };

  return (
      <div
          className={`pr_dash_main_wrapper float_left ${currentTheme} ${resSidebarToggled ? "left_sidebar_visible" : ""}`}
          >

        {/* <Sidebar
            resSidebarToggled={resSidebarToggled}
            setResSidebarToggle={setResSidebarToggle}
            changeTheme={changeTheme}
            history={history}
            /> */}
         
        <div className="appContainer">
          <div className="gd_fav_right_cont_box">
          <div className="alert2">  <Bannertop
           ID="bnnrr"
          />  </div>
      <div className="alert1"> <Banner/></div>
             <NavMenu/>
                      
             {/* <Header resSidebarToggled={resSidebarToggled}
                    setResSidebarToggle={setResSidebarToggle} history={history}>
                     </Header>  */}
                     
            <main className="app-content-harmony pr_dash_right_boxes_main float_left">
              {children}
            </main>
          </div>
        </div>
      </div>
  );
};

export default App;