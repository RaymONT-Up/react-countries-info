import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import defaultRoutes from "../../routes";
import { ROUTE_COUNTRIES } from "../../utils/consts";
import NotFound from "../NotFound/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      {defaultRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} exact />;
      })}

      <Route
        path="/"
        element={<Navigate to={ROUTE_COUNTRIES} replace />}
        exact
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
