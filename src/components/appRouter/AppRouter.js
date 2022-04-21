// import React, { useContext, useState } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import { AuthContext } from "../../context/Context";

// import { privateRoutes, publicRoutes } from "./routes/Routes";

// export const AppRouter = () => {
//     const {isAuth}= useContext(AuthContext)
    
//   return (
//     <>
//           {isAuth ? (
//               <Routes>
//                   {privateRoutes.map((route) => (
//                       <Route element={route.element} path={route.path} />
//                   ))}
//               </Routes>
//           ) : (
//         <Routes>
//           {publicRoutes.map((route) => (
//             <Route element={route.element} path={route.path} />
//           ))}
//               </Routes>
              
//           )}
//           </>
//   );
// };
