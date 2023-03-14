import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crew from "../pages/CrewPage";
import Destination from "../pages/DestinationPage";
import Home from "../pages/Home";
import Tech from "../pages/Techpage";

const AllRoutes =()=>{
    return(
<Routes>
        <Route
        path='/'
        element={<Home/>}
        />
        <Route
        path='/destination'
        element={<Destination/>}
        />
        <Route
        path='/crew'
        element={<Crew/>}
        />
        <Route
        path='/technology'
        element={<Tech/>}
        /> 

</Routes>
)
};
const ManageSession = () => {
    return <AllRoutes />;
  };
const Navigation = () => {
  return < BrowserRouter><ManageSession /></ BrowserRouter>;
};
export default Navigation;
