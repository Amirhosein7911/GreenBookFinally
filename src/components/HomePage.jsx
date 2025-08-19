import BookList from "./BookList";
// import BackButton from "./BackButton";
import Navbar from "./BookHeader";
import Footer from "./Footer/footer";
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
