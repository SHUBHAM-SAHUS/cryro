import "./banner.scss"
export const Banner = () => {
 
  const clickdesign=()=>{
   document.getElementById("parent").style.display="none"
  }
 
   return (
     <>
         <div className="alert"  id="parent">
           <span
             className="closebtn"
             onClick={clickdesign}
           >
             &times;
           </span>
           🔥 Introducing our <a href="#">How to Bitcoin" book</a> 🔥 Beginners can easily understand the basics of Bitcoin and more - Check it out now!
         </div>
     </>
   );
 };
 