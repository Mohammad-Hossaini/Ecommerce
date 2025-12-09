import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <div className="shadow-md bg-[#FFD178] dark:bg-[#ed8900] dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-[rgb(var(--color-primary)/1)] dark:bg-gray-800 py-2">
        <div className="container flex justify-between items-center">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src="./logo.png" alt="Logo" className="w-10" />
            Shpify
          </a>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 px-2 py-1 focus:outline-none focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-4 right-3 -translate-y-1/2" />
            </div>

            {/* Cart */}
            <button
              onClick={() => alert("Ordering is not available yet!")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
