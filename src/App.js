import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Homepages from "./components/home/Homepages";
// import Apps from "./components/common/header/login/Apps";
// import { Login } from "./components/common/header/login/Login";
import { Register } from "./components/common/header/login/Register";
// import LoggedIn from "./components/LoggedIn";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import NotLoggedIn from "./components/NotLoggedIn";
// import { Login } from "./components/common/header/login/Login";
function App() {

  const user = 4;
  console.log(user);
  return (
    <>

      <BrowserRouter>

        <Header />
        {/* <Homepages/> */}
        <Routes>
          <Route exact path="/signin" element={user ? <Homepages /> : <Login />} />
          <Route exact path="/register" element={user ? <Homepages /> : <Register />} />
          < Route exact path="/" element={user ? <Homepages /> : <Login />} />
          {/* <Route exact path="/" element={<Homepages/>}/> */}

          {/* <Route exact path="/" element={user ? <Homepages /> : <Navigate to="/signin" />} /> */}

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App