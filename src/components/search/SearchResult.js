import React,{useEffect,useState} from 'react'
import{Link} from "react-router-dom"
import {ImCross} from "react-icons/im"



export const SearchResult = ({inputdata }) => {
   
 


//  const ClickOne=()=>{

//     document.getElementById("crossicon").style.display= "none";
//  }

    // const [droplist,setdroplist] = useState({})
    
        const setdroplist = (inputdata?.data)
         console.log(setdroplist)
  
   return (
        <>
        {/* {
            setdroplist?.map((val,index)=>(
                
                <span> 
                  {
                     val &&val.address.length>0? 
                  <Link to={`/coindetails/${val.address}`}><div>{val.currencySymbol}</div> </Link> 
                  :null
                
                  }
                
                  </span>
            )) */}
        }
          
    
        </>
    )
}


