import BookList from "./BookList.js";
// import BackButton from "./BackButton";
import Navbar from "./BookHeader.js";
import Footer from "./Footer/footer.js";
import { Book } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <BookList />
      <Footer />
      <Book />
    </div>
  );
};

export default HomePage;
