import React from "react";
import Navitem from "./Navitem";

export default function Navbar() {
  return (
    <nav className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-8">
      <Navitem title="Trending" param="fetchTrending" />
      <Navitem title="Top Rated" param="fechTopRated" />
    </nav>
  );
}
