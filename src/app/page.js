import Results from "@/components/Results";
import { resolve } from "styled-jsx/css";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  let { genre } = await searchParams;
  genre = genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failt to fetch data");
  }
  const results = data.results;

  return (
    <main>
      <Results results={results} />
    </main>
  );
}
