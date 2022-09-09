import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import LoginSignUp from "./Components/LoginSignUp";
import Footer from "./Components/Footer";
import DetailView from "./Components/DetailView";
import GenreCards from "./Components/GenreCards";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="main" element={<Main />} />
        <Route path="/:id" element={<DetailView />} />
        <Route path="genre/:id" element={<GenreCards />} />
        <Route path="Login" element={<LoginSignUp />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
