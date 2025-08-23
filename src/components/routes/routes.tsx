import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../Login/login.js";
import Books from "../Books.js";
import BookList from "../BookList.js";
import HomePage from "../HomePage.js";
import BookDetails from "../BookDetails.js";
import ToDoList from "../ToDoList.js";
import Header from "../BookHeader.js";

const AppRoutes = () => {
  const location = useLocation();

  const hideHeaderPaths = ["/"];
  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/book" element={<Books />} />

        <Route path="/list" element={<BookList />} />
        <Route path="/abu" element={<ToDoList />} />

        <Route path="/Books/:number" element={<BookDetails />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
