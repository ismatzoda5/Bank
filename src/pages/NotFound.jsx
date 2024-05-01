import { Link } from "react-router-dom";
import NotFoundImage from '../assets/notfound.jpeg'; // Подставьте свое изображение


const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EBA707]">
      <div className="text-center">
        <div className="animate-bounce text-6xl text-gray-800 mb-4">404</div>
        <p className="text-lg text-gray-600 mb-8">Page Not Found</p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
