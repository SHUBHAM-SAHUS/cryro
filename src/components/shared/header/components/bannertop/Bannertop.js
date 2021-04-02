import "./bannertop.scss"
import alertimg from  "../../../../../assets/images/alert-img.jfif";
export const Bannertop = (props) => {
     const idname = props.ID;
  const clickdesign=()=>{
   document.getElementById(`${idname}`).style.display="none"
  }
 
   return (
     <>
         <div className="alert"  id={props.ID}>
           <span
             className="closebtn"
             onClick={clickdesign}
           >
             &times;
           </span>
           <img src={alertimg}/>
         </div>
     </>
   );
 };
 