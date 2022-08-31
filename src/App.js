import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import DataFetch from "./Components/DataFetch";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      <Header />
      <DataFetch />
      <Footer />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path="error"
          element={<div>oops, something went wrong.</div>}
        />
        <Route path="*" element={<div>not found</div>} />
      </Routes>

      {/* <DataFetch /> */}
    </div>
  );
}

export default App;
