import React from "react";
import { Navigate, Route } from "react-router-dom";
import defaultRoutes from "../../routes";
import { ROUTE_COUNTRIES } from "../../utils/consts";
import NotFound from "../NotFound/NotFound";

const AppRouter = () => {
  return (
    <div>
      {defaultRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} exact />;
      })}

      <Route
        path="/"
        element={<Navigate to={ROUTE_COUNTRIES} replace />}
        exact
      />
      <Route path="*" element={<NotFound />} />
    </div>
  );
};

export default AppRouter;
