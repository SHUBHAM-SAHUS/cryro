import "./bannertop.scss"
import alertimg from  "../../../../../assets/images/alert-img.jfif";
 
export const Bannertop = () => {
 
 const clickdesign=()=>{
  document.getElementById("parenttop").style.display="none"
 }

  return (
    <>
        <div className="alert"  id="parenttop">
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
