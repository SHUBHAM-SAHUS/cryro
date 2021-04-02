import React, { useState, useEffect, useCallback } from "react";
import CommonTable from "components/shared/SortableTable";
import "../loader/Loading.scss";
import axios from "axios";
import * as Api from "api";

import { TextTruncate } from "utils/TextTruncate";
import { Datatable } from "components/Datatable";
function createData(
  sl,
  pair,
  symbol,
  contractType,
  status,
  baseAsset,
  quoteAsset,
  pricePrecision,
  minPrice,
  maxPrice
) {
  return {
    sl,
    symbol,
    pair,
    contractType,
    status,
    baseAsset,
    quoteAsset,
    pricePrecision,
    minPrice,
    maxPrice,
  };
}
const rows = [];

export const Home = (history) => {
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);
  const [rowData, setRowData] = useState(rows);
  // const [itemdata, setitemdata] = useState();
  const [item, setitem] = useState({});
  // const [itemsecond, setitemsecond] = useState({});

  //       useEffect(()=>{

  //                  axios.get("http://167.71.228.49:3009/api/coin/pancake")
  //                  .then((response)=>{
  //                   setitem(response)
  //                     // console.log(item)
  //                  })
  //                  .then((error)=>{
  //                       // console.log(error)

  // })

  //  },[])

   useEffect(() => {
    setTimeout(() => {
      axios.get("http://167.71.228.49:3009/api/coin/pancake")
        .then((response) => {
          // console.log(response);
          setitem(response)
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 100);
        });
    }, 100);
  }, []);

  // return (
  //   <div>

  //     <Datatable item={item} />
  //   </div>

  // );

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
          <Datatable item={item} />
        </>
      )}
    </>
  );
};
