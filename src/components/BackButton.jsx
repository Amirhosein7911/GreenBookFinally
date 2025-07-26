import { useNavigate, useLocation } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <button
      className="fixed top-4 left-4 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow"
      onClick={() => navigate(-1)}
    >
      بازگشت
    </button>
  );
}

export default BackButton;
