// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiOutlineArrowUp } from "react-icons/hi";
import { Provider } from "react-redux";
import storeData from "./components/Redux/store/store";
function App() {
  const [up, setUp] = useState(window.scrollY);
  function top() {
    window.scroll(0, 0);
  }
  useEffect(() => {
    function toUp() {
      setUp(window.scrollY);
    }
    window.addEventListener("scroll", toUp);

    return function () {
      window.removeEventListener("scroll", toUp);
    };
  });
  return (
    <Provider store={storeData}>
      {up > 1000 && (
        <Button
          style={{
            position: "fixed",
            margin: "50px",
            width: "7%",
            height: "50px",
            fontSize: "20px",
            borderRadius: "40px",
            textAlign: "center",
            marginLeft: "50%",
            bottom: "-7%",
          }}
          onClick={top}
        >
          <HiOutlineArrowUp className="h-6 w-6" />
        </Button>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
