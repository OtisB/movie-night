import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import LoginSignUp from "./Components/LoginSignUp";
import Footer from "./Components/Footer";
import DetailView from "./Components/DetailView";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="main" element={<Main />} />
        <Route path="/:id" element={<DetailView />} />
        <Route path="Login" element={<LoginSignUp />} />
        <Route
          path="error"
          element={
            <div className="noMainShown">oops, something went wrong.</div>
          }
        />
        <Route
          path="*"
          element={<div className="noMainShown">not found</div>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
