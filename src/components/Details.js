import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./details.scss"
import { ContactsOutlined, Search } from "@material-ui/icons";
import { Bannertop } from "./shared/header/components/bannertop/Bannertop";
import { SearchData } from "./search/SearchData";
import { SearchResult } from "./search/SearchResult";
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { BsBellFill } from 'react-icons/bs'
import { FaReddit } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export const Details = (props) => {

  const [coindetails, setcoindetails] = useState({});
  const [symbolname,setsymbolname] = useState("")

  //  const address = useParams();
  const address = props.match.params.ID;
  useEffect(() => {
    axios.get(`http://167.71.228.49:3009/api/coin/details/${address}`)
      .then(
        (response) => {
          setcoindetails(response.data[0]);
          //  console.log(coindetails)
          
           setsymbolname(response.data[0].currency.symbol)
           console.log(symbolname)
        },

      )
      .catch((error) => {
        console.log(error);
      });
  },[]);



  return (
    <>
      <div className="container mt-5">
        <div className="top-img"><Bannertop 
         ID="bnnr"
        /></div>


        <h2 className="mb-3"> {symbolname} </h2>
        <ul className="usd-topList">
          <li>
            <a href="#" className="btn bg-green"><span data-target="currency-dropdown.button">USD</span></a>
            <span className="bell-icon"><BsBellFill /></span>
          </li>
          <li>
            <NavDropdown title="Buy / Sell" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Buy / Sell</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Buy / Sell</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Buy / Sell</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </li>
          <li>
            <NavDropdown title="Long / Short" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Long / Short</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Long / Short</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Long / Short</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </li>
          <li>
            <NavDropdown title="Earn / Loan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Earn / Loan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Earn / Loan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Earn / Loan</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </li>
        </ul>

        <div className="row detail-page-row">
          <div className="col-md-7 col-lg-7">
            <div class="coin-link-row mb-md-0">
              <span class="coin-link-title mr-2">Market Cap</span>
              <div class="d-flex flex-wrap">
                <span class="coin-tag mr-1 text-white bg-dark font-weight-bold">Rank #1</span>
              </div>
            </div>
            <div class="coin-link-row mb-md-0">
              <span class="coin-link-title mr-2">Website</span>
              <div class="d-flex flex-wrap">
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">bitcoin.org</a>
              </div>
            </div>
            <div class="coin-link-row mb-md-0">
              <span class="coin-link-title mr-2">Explorers</span>
              <div class="d-flex flex-wrap">
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">Blockchair</a><a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">Btc</a><a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">Tokenview</a>
              </div>
            </div>
            <div class="coin-link-row mb-md-0">
              <span class="coin-link-title mr-2">Wallets</span>
              <div class="d-flex flex-wrap">
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag d-block d-lg-none coin-link-tag-ad" href="#"><i class="far mr-1 fa-ad"></i>Crypto.com - DeFi Wallet</a>
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag d-none d-lg-block coin-link-tag-ad" href="#"><i class="far mr-1 fa-ad"></i>Crypto.com - DeFi Wallet</a>
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">Ledger</a>
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">Trezor</a><a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">Electrum</a>
              </div>
            </div>
            <div class="coin-link-row mb-md-0">
              <span class="coin-link-title mr-2">Community</span>
              <div class="d-flex flex-wrap">
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#"><FaReddit />Reddit</a>
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#"><FaTwitter />Twitter</a>
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#"><FaFacebookF />Facebook</a>
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">bitcointalk.org</a>
              </div>
            </div>
            <div class="coin-link-row mb-md-0">
              <span class="coin-link-title mr-2">Source Code</span>
              <div class="d-flex flex-wrap">
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag" href="#"><FaGithub />Github</a>
              </div>
            </div>
            <div class="coin-link-row mb-md-0">
              <span class="coin-link-title mr-2">Tags</span>
              <div class="d-flex flex-wrap">
                <a target="_blank" rel="nofollow noopener" class="coin-link-tag " href="#">Cryptocurrency</a>
              </div>
            </div>
             
          </div>
        <div class="col-md-3 col-lg-5 text-center text-md-right">
          <div class="mt-1 mb-3 d-flex flex-wrap">
            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Count</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.count}</span>
              </div>
            </div>
            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Days</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.days} </span>
              </div>
            </div>
            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Average</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.average} </span>
              </div>
            </div>
            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Max Date: </div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.max_date} </span>
              </div>
            </div>
            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Amount</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.amount}</span>
              </div>
            </div>
            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Min Date</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.min_date}</span>
              </div>
            </div>

            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Median</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.median} </span>
              </div>
            </div>

            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Receiver</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.receiver_count} </span>
              </div>
            </div>

            <div class="col-6 col-md-12 col-lg-6 p-0 mb-2">
              <div class="font-weight-bold">Sender</div>
              <div class="mt-1">
                <span class="no-wrap">{coindetails.sender_count} </span>
              </div>
            </div>


          </div>
        </div>

        </div>

{/*         
        <ul className="details-list">
          <li className="bg-gray">Count: <span> {coindetails.count} </span></li>
          <li className="bg-gray">Days:  <span> {coindetails.days} </span></li>
          <li>Average: {" "} <span> {coindetails.average} </span></li>
          <li>Max Date: {" "}  <span> {coindetails.max_date} </span></li>
          <li className="bg-gray">Amount:  <span> {coindetails.amount} </span></li>
          <li className="bg-gray">Min Date: {" "} <span> {coindetails.min_date} </span></li>
          <li>Median:  <span> {coindetails.median} </span></li>
          <li >Receiver: {" "}<span> {coindetails.receiver_count} </span></li>
          <li className="bg-gray">Sender: {" "} <span> {coindetails.sender_count} </span></li>
          <li className="bg-gray"></li>
      </ul>
      */}
    </div>
    
 
    </>
  );
};
