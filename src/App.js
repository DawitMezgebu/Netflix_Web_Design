import "./App.css";
import "@mantine/core/styles.css";
import Sidebar from "./component/Main/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import Login from "./component/user_mgt/Login";

function App() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const ref = useRef(null);
  return (
    <div className="App">
      <div className="App w-full flex  bg-gray-100 ">
        {location.pathname !== "/newlogin" &&
          location.pathname !== "/newreset" &&
          location.pathname !== "/newverify" &&
          location.pathname !== "/newchange" &&
          location.pathname !== "/alx" &&
          location.pathname !== "/alxs" &&
          location.pathname !== "/qrGen" &&
          location.pathname !== "/navb" &&
          location.pathname !== "404" &&
          location.pathname !== "/500" &&
          location.pathname !== "/maintainance" &&
          location.pathname !== "/newsignup" && (
            <div
              ref={ref}
              className={`mr-10 h-[100vh]   top-0 ${
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
            (location.pathname === "/newlogin" ||
              location.pathname === "/newreset" ||
              location.pathname === "/newverify" ||
              location.pathname === "/newchange" ||
              location.pathname === "/alx" ||
              location.pathname === "/alxs" ||
              location.pathname === "/qrGen" ||
              location.pathname === "/navb" ||
              location.pathname === "404" ||
              location.pathname === "/500" ||
              location.pathname === "/maintainance" ||
              location.pathname === "/newsignup") &&
            "md:w-full"
          }`}
        >
          {location.pathname !== "/newlogin" &&
            location.pathname !== "/newreset" &&
            location.pathname !== "/newverify" &&
            location.pathname !== "/newchange" &&
            location.pathname !== "/alx" &&
            location.pathname !== "/alxs" &&
            location.pathname !== "/qrGen" &&
            location.pathname !== "/navb" &&
            location.pathname !== "404" &&
            location.pathname !== "/500" &&
            location.pathname !== "/maintainance" &&
            location.pathname !== "/newsignup" && (
              <div className=" border-b s h-16 "></div>
            )}
          <Routes>
            <Route exact path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
