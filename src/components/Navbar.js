import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="bg-sky-500/100 font-bold text-gray-700 flex justify-center space-x-16">
      <Link to="/">Home</Link>
      <Link to="/Cards">Videos</Link>
    </div>
  );
};

export default Navbar;