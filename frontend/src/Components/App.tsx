import AddVolunteer from "./AddVolunteer";
import Home from "./Home";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Nav from "./Nav";



function App() {

    return (
        <>
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Nav />} >
      <Route path="/" element={<Home/>}/>
      <Route path="/addvolunteer"  element={<AddVolunteer />}/>
    </Route>
      </Routes>
    </BrowserRouter>
        </>
    )
}
export default App;