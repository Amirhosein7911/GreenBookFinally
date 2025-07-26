import BookList from "./BookList";
import BackButton from "./BackButton";
import Navbar from "./BookHeader";
import Footer from "./Footer/footer";

const HomePage = () => {
  return (
    <div className="bg-white">
      <BackButton />
      <Navbar />
      <BookList />
      <Footer />
    </div>
  );
};

export default HomePage;
