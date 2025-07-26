import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book");
  };
  const handleClickk = () => {
    navigate("/abu");
  };
  const handleClickkk = () => {
    navigate("/");
  };

  return (
    <div class="lg:grid grid-cols-3 justify-items-stretch px-20 py-10 transition-transform hidden !py-4  bg-primary">
      <header className="fixed top-0 left-0 w-full h-20 bg-teal-900 text-white shadow-xl z-50 transition-colors duration-500 ease-in-out hover:bg-teal-950">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
          <div className="text-3xl font-extrabold tracking-wide select-none transition-colors duration-500 ease-in-out hover:text-teal-900">
            کتاب سبز
          </div>

          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            <a
              href="#"
              className="hover:text-green-700 transition-colors duration-300"
            >
              خانه
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              className="hover:text-green-700 transition-colors duration-300"
            >
              کتاب ها{" "}
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickk();
              }}
              className="hover:text-green-700 transition-colors duration-300"
              title=" اینجا میتونی کتاب هایی که دوست داری رو نگه داری  ( :"
            >
              کتابایی که دوست داشتی
            </a>
          </nav>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleClickkk();
            }}
            className="bg-white text-green-800 px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-red-400 transition duration-300 select-none"
          >
            خروج
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
