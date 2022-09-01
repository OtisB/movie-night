import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Login from "./Components/Login";
// import useDataFetch from "./Components/useDataFetch";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <useDataFetch /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="error" element={<div>oops, something went wrong.</div>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
