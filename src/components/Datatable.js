import React, { useState } from "react";
import "./pagination/pagination.scss";
import "../components/loader/Loading.scss";
import { Line } from "react-chartjs-2";
// import { Chartdata } from "./chart/Chartdata";
import { Highchartss } from "./highchart/Hightchart";
import LineChart from "./shared/header/components/chart/LineChart";
import { User } from "./User";
import { Link } from "react-router-dom";
import{AiOutlineStar} from "react-icons/ai"
import { TurnedInOutlined } from "@material-ui/icons";

// import { Stock } from "./stock/Stock";

const renderData = (data) => {
  return (
    <ul>
      {data.map((todo, index) => {
        return <li key={index}>{todo.title}</li>;
      })}
    </ul>
  );
};

 

export const Datatable = (props) => {







  
 
  // const setgraphh = props.item.data[0].graph
  

  const fulldata = props.item.data;
  // console.log(graphdata);
  const [datapage, setDatapage] = useState([fulldata]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(datapage.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datapage.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      <div className="table-responsive tbl">
        <table className="table ">
          <thead class="thead-light">
            <tr>
              <th scope="col" colspan="2" className="text-center">#</th>
              <th scope="col">Coin</th>
              <th scope="col">Price</th>
              <th scope="col">1h</th>
              <th scope="col">24h</th>
              <th scope="col">7d</th>
              {/* <th scope="col">24 th volume</th>
              <th scope="col">mkt Cap</th> */}
              <th scope="col">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {fulldata?.map((val, index) => {
              // console.log(val);

              return (
                <>
                  <tr key={index}>
                    <td> <AiOutlineStar/></td>
                    <td> {index + 1}</td>
                    <td><Link to={`/coindetails/${val.address}`}>
                      {" "}
                      {val.currencySymbol}{" "}
                    </Link></td>  
                    <td>{val.currencyPrice}</td>
                    <td>{val.oneHourChange}</td>
                    <td> {val.sevenDayChange}</td>
                    <td>{val.TFHourChange} </td>
                    {/* <td> </td>
                    <td> </td> */}
                    <td style={{width:"135px"}}>
                      {/* <Line data={data}/>  */}

                      <LineChart 
                        data={{
                          labels: val.graph?.x,
                          datasets: [
                            {
                              lineTension: 0,
                              barPercentage: 0,
                              backgroundColor: "#fff",
                              borderColor: "#8dc647",
                              borderWidth: 1,
                              data: val.graph?.y,
                            },
                          ],
                        }}
                        options={{
                          legend: {
                            display: false,
                          },
                          elements: {
                            point:{
                                radius: 0
                            }
                        },
                          scales: {
                            yAxes: [
                              {
                                display: false,
                              },
                            ],
                            xAxes: [
                              {
                                display: false,
                              },
                            ],
                          },
                        }}
                      />
                    </td>

                    {/*
                     */}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* {renderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button> */}
    </>
  );
};

