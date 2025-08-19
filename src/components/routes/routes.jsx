import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../Login/login";
import Books from "../Books";
import BookList from "../BookList";
import HomePage from "../HomePage";
import BookDetails from "../BookDetails";
import ToDoList from "../ToDoList";
import Header from "../BookHeader";

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
