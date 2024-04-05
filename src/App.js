import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";
import LoginForm from "./pages/LoginForm";
import Footer from "./components/Footer";
import FbReviewForm from "./components/FbReviewForm";
const UserContext = createContext();
export { UserContext };

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        {/* <nav>
      <ul>
        <a href="/"> Home</a> <br></br>
        <a href="/blogs"> Blogs</a> <br></br>
        <a href="/contact"> Contact</a>

      </ul>
    </nav> */}
        {/* using link from react router for link */}
        <div className="app">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            {/* use params hooks used for dynamic routing */}
            <Route path="/blogs/:title" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/login-form" element={<LoginForm />}></Route>
            <Route path="write-review" element={<FbReviewForm/>}> </Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
