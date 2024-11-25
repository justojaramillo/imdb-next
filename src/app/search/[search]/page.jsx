import React from "react";
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const { search } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = await data.results;

  return (
    <div>
      {results === 0 ? (
        <h1 className="text-center pt-6"> No results found</h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
