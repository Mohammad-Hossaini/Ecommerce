function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      {" "}
      {/* Upper Navbar */}
      <div className="bg-primary py-2">
        <div className="container flex justify-between items-center">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src="./logo.png" alt="Logo" className="w-10" />
            Shpify
          </a>

          <div className="group">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div></div>
    </div>
  );
}

export default Navbar;
