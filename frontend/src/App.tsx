import Header from "./components/Header";
//allof the routes should be there inside the routes that is conatiner for all of the routes
//And to enter each route or to register each of the route we use Route component its conatiner and route

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";




function App() {
  
  return (
    //register some routes of the application 
     <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
     </main>
  );
}

export default App;