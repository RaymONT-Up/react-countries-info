import Countries from "./pages/Countries/Countries";
import Country from "./pages/Country/Country";
import { ROUTE_COUNTRIES, ROUTE_COUNTRY } from "./utils/consts";
const defaultRoutes = [
  {
    path: ROUTE_COUNTRIES,
    Component: Countries,
  },
  {
    path: ROUTE_COUNTRY + "/:countryCode",
    Component: Country,
  },
];
export default defaultRoutes;
