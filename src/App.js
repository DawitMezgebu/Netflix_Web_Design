import "./App.css";
import "@mantine/core/styles.css";
import Sidebar from "./component/Main/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import Login from "./component/user_mgt/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import ProjectList from "./component/Project/ProjectList";
import Nav from "./component/Website/Basic/Nav";
import Home from "./component/Website/Home/Home";
import About from "./component/Website/About us/About";
import Whatwedo from "./component/Website/What we do/Whatwedo";
import Portfolio from "./component/Website/portfolios/Portfolio";
import Blog from "./component/Website/blog/Blog";

function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const ref = useRef(null);
  return (
    <div className="App">
      <div className="App w-full flex  bg-gray-100 ">
        {location.pathname !== "/login" &&
          location.pathname !== "/" &&
          location.pathname !== "/newverify" &&
          location.pathname !== "/newchange" &&
          location.pathname !== "/alx" &&
          location.pathname !== "/alxs" &&
          location.pathname !== "/qrGen" &&
          location.pathname !== "/navb" &&
          location.pathname !== "/navbars" &&
          location.pathname !== "/home" &&
          location.pathname !== "/about" &&
          location.pathname !== "/whatwedo" &&
          location.pathname !== "/projects" &&
          location.pathname !== "/blog" &&
          location.pathname !== "404" &&
          location.pathname !== "/500" &&
          location.pathname !== "/maintainance" &&
          location.pathname !== "/newsignup" && (
            <div
              ref={ref}
              className={`mr-14 h-[100vh]   top-0 ${
                showSidebar ? "  " : "hidden"
              }`}
            >
              <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            </div>
          )}

        <div
          className={`w-full md:w-[100%]  h-[100vh] overflow-auto ${
            !showSidebar && "md:w-full"
          } ${
            (location.pathname === "/login" ||
              location.pathname === "/" ||
              location.pathname === "/newverify" ||
              location.pathname === "/newchange" ||
              location.pathname === "/alx" ||
              location.pathname === "/alxs" ||
              location.pathname === "/qrGen" ||
              location.pathname === "/navb" ||
              location.pathname === "/navbars" ||
              location.pathname === "/home" ||
              location.pathname === "/about" ||
              location.pathname === "/whatwedo" ||
              location.pathname === "/projects" ||
              location.pathname === "/blog" ||
              location.pathname === "404" ||
              location.pathname === "/500" ||
              location.pathname === "/maintainance" ||
              location.pathname === "/newsignup") &&
            "md:w-full"
          }`}
        >
          {location.pathname !== "/login" &&
            location.pathname !== "/" &&
            location.pathname !== "/newverify" &&
            location.pathname !== "/newchange" &&
            location.pathname !== "/alx" &&
            location.pathname !== "/alxs" &&
            location.pathname !== "/qrGen" &&
            location.pathname !== "/navb" &&
            location.pathname !== "/navbars" &&
            location.pathname !== "/home" &&
            location.pathname !== "/about" &&
            location.pathname !== "/whatwedo" &&
            location.pathname !== "/projects" &&
            location.pathname !== "/blog" &&
            location.pathname !== "404" &&
            location.pathname !== "/500" &&
            location.pathname !== "/maintainance" &&
            location.pathname !== "/newsignup" && (
              <div className=" border-b s h-16 "></div>
            )}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/projectlist" element={<ProjectList />} />
            <Route exact path="/navbars" element={<Nav />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/whatwedo" element={<Whatwedo />} />
            <Route exact path="/projects" element={<Portfolio />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
