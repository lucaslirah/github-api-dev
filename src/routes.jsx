import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Routes>
      // nesses parâmetros podemos adicionar quantos forem necessários
      <Route path="/:login/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
