import axios from "../api/axios";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <Card
                image={movie.image}
                title={movie.title}
                vote={movie.avg_vote}
                content={movie.abstract}
                link={`/movies/${movie.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
