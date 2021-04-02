
import React from 'react'
import{Nav,Navbar,NavDropdown} from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import "./navmenu.scss";
import {CgFacebook} from "react-icons/cg";
import {TiSocialTwitter} from "react-icons/ti";
import {FaInstagram} from "react-icons/fa";
import logoimg from "../../../../../assets/images/logo.png"
import { SearchData } from 'components/search/SearchData';

export const NavMenu = () => {
    return (
        <div>
            <div className="MuiAppBar-colorPrimary MuiToolbar-gutters">            
            <Navbar expand="lg">
              <Navbar.Brand href="#home" className="makeStyles-logo-4"><img src={logoimg} style={{width:"35px"}}/> Wealthlocks</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={NavLink } to="/">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/">Markets</Nav.Link>
                  <Nav.Link as={NavLink} to="/">Exchanges</Nav.Link>
                  <Nav.Link as={NavLink} to="/NewsFeed">News</Nav.Link>
                  
                  <NavDropdown title="Community" id="basic-nav-dropdown">
                    <NavDropdown.Item to=""><CgFacebook/> Facebook</NavDropdown.Item>
                    <NavDropdown.Item to=""><TiSocialTwitter/> Twitter</NavDropdown.Item>
                    <NavDropdown.Item to=""><FaInstagram/> instagram</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
                  <SearchData/>
            </div>
        </div>
    )
}



         
