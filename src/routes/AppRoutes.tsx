import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element='' />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;