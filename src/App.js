import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Main from "./Components/Main";
// import useDataFetch from "./Components/useDataFetch";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      <Header />
      {/* <useDataFetch /> */}
      <Footer />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path="error"
          element={<div>oops, something went wrong.</div>}
        />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
