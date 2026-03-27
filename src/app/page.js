import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const genre = params.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
  );

  if (!res.ok) {
    // throw new Error("failed to fetch data");
    console.error("Failed to fetch data, status:", res.status);
  }

  const data = await res.json(); // ← fixed
  const results = data.results;
  

  return (
    <div>
      <Results results={results} />
    </div>
  );
}