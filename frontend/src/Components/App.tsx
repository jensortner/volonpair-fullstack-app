import AddVolunteer from "./AddVolunteer";
import Home from "./Home";
import VolunteerGallery from "./VolunteerGallery";
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
      <Route path="/volunteers"  element={<VolunteerGallery />}/>
    </Route>
      </Routes>
    </BrowserRouter>
        </>
    )
}
export default App;