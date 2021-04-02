
import React,{useState} from 'react'
import { SearchResult } from './SearchResult'
import {BiSearchAlt} from "react-icons/bi"
import axios from "axios"
import { ContactsOutlined } from '@material-ui/icons'
import{Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
    },
    // dropdown: {
    //   position: 'absolute',
    //   top: 28,
    //   right: 0,
    //   left: 0,
    //   zIndex: 1,
    //   border: '1px solid',
    //   padding: theme.spacing(1),
    //   backgroundColor: theme.palette.background.paper,
    // },
  }));

export const SearchData = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
 
    const handleClickAway = () => {
      setOpen(false);
    };
  
    const xx = document.createElement("BODY");
 


    const [searchinput,setsearchinput] = useState([])
    const [inputdata,setinputdata] = useState()
    const [showResults, setShowResults] = useState(false)
    const  inputfld = document.getElementById("inputt")
 const InputEvent=(e)=>{
    const datasearch = e.target.value
     setsearchinput(datasearch)
    
    }

    const updataform=(e)=>{
        setOpen((prev) => !prev);
        e.preventDefault();
        axios.get(`http://167.71.228.49:3009/api/coin/pancake/${searchinput}`)
     .then((response)=>{
        setinputdata(response)
    //   console.log(inputdata)
        

     })
      .catch((error)=>{
           console.log(error) 
     })
      
    
    }

    const setdroplist = (inputdata?.data)
    console.log(setdroplist)

    return (
        <>
           <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
        <div className="search-box">
         <div className={classes.root}>

              <form onSubmit={updataform}>
              <input type="text" placeholder="Please enter search value" onChange={InputEvent} value={searchinput} id="inputt" required/>

                    <button  type="submit"   onClick={updataform}> <BiSearchAlt/> </button>    
                   </form>

                      

                   <div className="search-bar">
                   {
            setdroplist?.map((val,index)=>(
                open ? (                   
                    <span className={classes.dropdown}>
                   <Link to={`/coindetails/${val.address}`}><div>{val.currencySymbol}</div> </Link> 
                   </span>
                   ) : null
            ))
            
        }</div>
          

             </div>
        </div>
              
      
          </ClickAwayListener>
    
        </>
    )
}


