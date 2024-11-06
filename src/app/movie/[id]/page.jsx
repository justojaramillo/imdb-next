import Image from "next/image";

export default async function Movie({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x6">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={500}
          height={300}
          alt="Movie image"
          className="rounded-lg"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title}</h2>
          <p className="text-lg mb-3"> {movie.overview} </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
