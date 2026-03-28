// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FiThumbsUp} from 'react-icons/fi';

// export default function Card({ result }) {
//   return (
//     <div className="group">
//       <Link href={`/movie/${result.id}`}>
//         <Image
//           src={`https://image.tmdb.org/t/p/original/${
//             result.backdrop_path || result.poster_path
//           }`}
//           alt={result.title || result.original_title || "Movie poster"}
//           width={500}
//           height={300}
//           className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity
//                 duration-500"
//         ></Image>
//         <div className="p-2">
//           <p className="line-clamp-2 text-md">{result.overview}</p>
//           <h2 className="text-lg font-bold trancate">
//             {result.title || result.name}
//           </h2>
//           <p className="flex items-center">
//             {result.release_date || result.first_air_date}
//             <FiThumbsUp className="h-5 mr-1 ml-3"/>
//             {result.vote_count}
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp, FiCalendar } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <Link href={`/movie/${result.id}`}>
      <div className="group relative rounded-xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
        
        {/* Image Container */}
        <div className="relative overflow-hidden h-52 w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            alt={result.title || result.original_title || "Movie poster"}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/30 to-transparent" />

          {/* Vote badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-yellow-400 text-xs font-bold px-2 py-1 rounded-full border border-yellow-400/30">
            <FiThumbsUp className="w-3 h-3" />
            <span>{result.vote_count?.toLocaleString()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h2 className="text-white font-bold text-base leading-tight line-clamp-1 group-hover:text-yellow-400 transition-colors duration-300">
            {result.title || result.name}
          </h2>

          {/* Date */}
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <FiCalendar className="w-3 h-3" />
            <span>{result.release_date || result.first_air_date || "TBA"}</span>
          </div>

          {/* Overview */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {result.overview || "No description available."}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="h-0.5 w-0 group-hover:w-full bg-yellow-400 transition-all duration-500" />
      </div>
    </Link>
  );
}