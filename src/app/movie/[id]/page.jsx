import Image from 'next/image';

export default async function MoviePage({ params }) {
  const { id: movieId } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  const imagePath = movie.backdrop_path ?? movie.poster_path;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${imagePath}`}
            alt={movie.title || "Movie poster"}
            width={500}
            height={300}
            unoptimized
            className="rounded-lg"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        ) : (
          <div className="w-[500px] h-[300px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_average?.toFixed(1)} / 10
          </p>
        </div>
      </div>
    </div>
  );
}