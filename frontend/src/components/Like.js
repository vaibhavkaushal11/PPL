// import React, { useState } from "react";

// function Like() {
//   const [click, setClick] = useState(0);

//   React.useEffect(() => {
//     const parsedclick = Number(localStorage.getItem("click") || 0);
//     setClick(parsedclick);
//   }, []);

//   React.useEffect(() => {
//     localStorage.setItem("click", click);
//   }, [click]);

//   return (
//     <div>
//       <a onClick={() => setClick(1)}>
//         <span className="btn_icon">
//           <img src="/images/icon_003.png" alt="share" />
//         </span>
//         {click} Likes
//       </a>
//     </div>
//   );
// }

// export default Like;
