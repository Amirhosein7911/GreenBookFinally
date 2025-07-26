const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              درباره ما
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  تاریخچه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  تیم ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                  title="09922446282"
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              خدمات
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  پشتیبانی
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  آموزش
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              منابع
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  وبلاگ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  راهنما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  سؤالات متداول
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
              title="http://localhost:5173/home#"
            >
              ما را دنبال کنید
            </h3>
            <ul className="mt-4 flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">فیسبوک</span>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">توییتر</span>
                  <i className="fab fa-twitter" title="amirhosein-n-rad"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">اینستاگرام</span>
                  <i className="fab fa-instagram" title="amirhosein-n-rad"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-gray-400">
            &copy; ( : ! تمامی حقوق این سایت متعلق به همه می باشد{" "}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              شرایط استفاده
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              نقشه سایت
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
