import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Heading from "../components/ui/Heading";
import Review from "../components/Review";
import FormReview from "../components/FormReview";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-card">
            <img src={movie.image} alt={movie.title} />
            <div className="info">
              <Heading level={1}>{movie.title}</Heading>
              <Heading level={2}>{movie.director}</Heading>
              <p>{movie.abstract}</p>
              <Heading level={5}>
                {movie.genre} - {movie.release_year}
              </Heading>
            </div>
          </div>
          <div className="col-review info">
            <Heading level={1}>Recensioni</Heading>
            {movie?.reviews?.map((review) => (
              <div key={review.id}>
                <Review review={review} />
              </div>
            ))}
          </div>
          <div className="new-review info">
            <Heading level={2}>Aggiungi Recensione</Heading>
            <div className="form">
              <FormReview fetchMovie={fetchMovie} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
