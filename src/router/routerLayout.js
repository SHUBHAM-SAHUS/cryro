import React from "react";

import App from "../App.js";
import logo from "assets/images/thumbnails/cloud.svg";

export const PublicRouterLayout = ({ children }) => (
  
    <App>{children}</App>
);

export const PrivateRouterLayout = ({ children }) => <App>{children}</App>;
